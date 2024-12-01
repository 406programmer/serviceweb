import pymysql
import pandas as pd

# Connect to MySQL database using PyMySQL
db_connection = pymysql.connect(
    host="localhost",
    user="root",
    password="sourabh@71234",  # Use your actual password here
    database="project"
)

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

# Execute the query and fetch the result using pymysql
cursor = db_connection.cursor(pymysql.cursors.DictCursor)  # Use DictCursor for dictionary results
cursor.execute(query_popularity)
results = cursor.fetchall()

# Convert the results to a pandas DataFrame
popularity_df = pd.DataFrame(results)

# Print the result
print("Service Popularity Based on Ratings:")
print(popularity_df)

# Close the connection
cursor.close()
db_connection.close()