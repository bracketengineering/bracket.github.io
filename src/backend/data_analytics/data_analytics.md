# Data Analytics

## Services

-----

We will use the following services for analytics of user and app metadata:

### S3

We will store user and app metadata here. We need to ensure data is organised systematically to aptimise performance and usability 

### AWS Glue

We will be using the data catalog and crawler features

**Data Catalog**:
The AWS Glue Data Catalog is a central metadata repository that stores information about data sources, tables, and the schema of data within those tables. The data catalog provides a unified view of the data available across various data stores, including relational databases, data warehouses, and data lakes.

**Crawler**
The AWS Glue Crawler tool connects to your data sources and automatically discovers the schema of your data, infers its structure, and populates the AWS Glue Data Catalog with metadata about your data assets. The crawler analyzes your data sources to determine the format and structure of your data, including the type and format of columns, data types, and relationships between tables.

**Our Process**

1. Create a new Crawler to scan your JSON data in the S3 bucket. The Crawler will automatically discover the schema and create a table in the Data Catalog.
2. Configure the Crawler by specifying the S3 bucket path where your JSON data is stored, choose an IAM role with necessary permissions, and set up a schedule for the Crawler to run.
3. Execute the Crawler to populate the Data Catalog with your JSON data schema.


### AWS Athena

AWS Athena is a serverless query service that makes it easy to analyze large amounts of data stored in Amazon S3 using standard SQL syntax. With Athena, you can quickly query data in S3 without having to set up or manage any infrastructure.

**Our Process**
1. Create a table in Athena that references the data sources that we crawled in AWS Glue. This table definition should include information about the data schema, the location of the data in Amazon S3, and other metadata about the data. 
2. In the "Location" field of the table definition, specify the S3 location where the data is stored. 
3. Once the table is defined, we can start querying your data using SQL queries in Athena. The AWS Glue Data Catalog provides metadata about the data, such as column names, data types, and relationships between tables, which we can use in our queries.