from flask import Flask, jsonify
from flask_cors import CORS  # Make sure this line is present
import pymysql
import pandas as pd

app = Flask(__name__)
CORS(app)
# MySQL database connection details
db_config = {
    "host": "localhost",
    "user": "root",
    "password": "sourabh@71234",  # Use your actual password here
    "database": "project"
}

@app.route('/api/service_popularity', methods=['GET'])    
def get_service_popularity():
    try:
        # Connect to MySQL database
        db_connection = pymysql.connect(**db_config)

        # Define the query to get service popularity based on average ratings
        query_popularity = """
        SELECT 
            S.ServiceID,
            S.ServiceName,
            AVG(U.Rating) AS AvgRating
        FROM 
            Services S
        JOIN 
            User U ON S.ServiceID = U.ServiceID
        GROUP BY 
            S.ServiceID, S.ServiceName
        ORDER BY 
            AvgRating DESC;
        """

        # Execute the query
        cursor = db_connection.cursor(pymysql.cursors.DictCursor)
        cursor.execute(query_popularity)
        results = cursor.fetchall()

        # Convert the results to a pandas DataFrame (optional, for better data processing)
        popularity_df = pd.DataFrame(results)

        # Return the data as JSON
        return jsonify(popularity_df.to_dict(orient='records'))

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        # Close the connection
        cursor.close()
        db_connection.close()

if __name__ == '__main__':
    app.run(debug=True)
