from flask import Flask, request, jsonify
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from sqlalchemy import create_engine
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)
# Set up database connection
engine = create_engine('mysql+pymysql://root:sourabh%4071234@localhost/project')

# Load User and Services tables using pandas
query_user = "SELECT * FROM User;"
query_services = "SELECT * FROM Services;"

# Use pandas to read SQL queries
user_df = pd.read_sql(query_user, engine)
services_df = pd.read_sql(query_services, engine)

# Create a user-item matrix from User table
user_item_matrix = user_df.pivot_table(index='UserID', columns='ServiceID', values='Rating', fill_value=0)

# Calculate cosine similarity between users
cosine_sim = cosine_similarity(user_item_matrix)

# Convert to a DataFrame for easier handling
cosine_sim_df = pd.DataFrame(cosine_sim, index=user_item_matrix.index, columns=user_item_matrix.index)

# Function to get recommendations based on collaborative filtering
def get_collaborative_recommendations(user_id, user_item_matrix, cosine_sim_df, top_n=3):
    # Get the most similar users based on cosine similarity
    similar_users = cosine_sim_df[user_id].sort_values(ascending=False)
    
    # Get the top N similar users excluding the user itself
    similar_users = similar_users.drop(user_id).head(top_n)
    
    # Get the services rated by the similar users
    recommended_services = user_item_matrix.loc[similar_users.index].mean(axis=0)
    
    # Get the services that the user hasn't rated yet
    user_rated_services = user_item_matrix.loc[user_id] > 0
    recommended_services = recommended_services[user_rated_services == False]
    
    # Get top N recommended services
    top_services = recommended_services.nlargest(top_n)
    
    # Get the service names from the Services table
    recommended_service_names = services_df[services_df['ServiceID'].isin(top_services.index)]
    
    return recommended_service_names[['ServiceName', 'ServiceCategory']].to_dict(orient='records')

# API endpoint for getting recommendations
@app.route('/recommendations', methods=['GET'])
def recommendations():
    user_id = request.args.get('user_id', type=int)
    if user_id is None:
        return jsonify({"error": "User ID is required"}), 400
    
    try:
        recommended_services = get_collaborative_recommendations(user_id, user_item_matrix, cosine_sim_df)
        return jsonify({"recommended_services": recommended_services}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True,port=5003)
