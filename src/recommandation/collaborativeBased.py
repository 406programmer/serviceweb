import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from sqlalchemy import create_engine

# Create an SQLAlchemy engine for MySQL using pymysql
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
    
    return recommended_service_names[['ServiceName', 'ServiceCategory']]

# Ask the user to input a user ID
user_id = int(input("Enter the User ID to get service recommendations: "))

# Get recommendations for the entered user_id
recommended_services = get_collaborative_recommendations(user_id, user_item_matrix, cosine_sim_df)

# Display the recommended services
print(f"\nRecommended services for user {user_id}:")
print(recommended_services)