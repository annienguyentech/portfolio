<h1 align="center">📊 Marketing Campaign Response Prediction</h1>

<p align="center">
  A machine learning project that predicts whether a customer will respond to a marketing campaign.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.13-blue" alt="Python">
  <img src="https://img.shields.io/badge/Model-Logistic%20Regression-orange" alt="Model">
  <img src="https://img.shields.io/badge/Library-scikit--learn-yellow" alt="scikit-learn">
  <img src="https://img.shields.io/badge/Status-Completed-brightgreen" alt="Status">
</p>

<hr>

<h2 align="center">📌 Project Overview</h2>

<p>
  Marketing teams need to identify customers who are most likely to respond to
  their campaigns. This project uses customer demographics, spending behavior,
  and campaign type to build a logistic regression model that estimates each
  customer's likelihood of purchasing during a marketing campaign.
</p>

<p>
  The project covers data exploration, data preprocessing, model training,
  performance evaluation, and predictions for new customers. Because positive
  campaign responses represent the minority class, the final model uses balanced
  class weights to improve its ability to identify potential responders.
</p>

<h2 align="center">🎯 Project Objectives</h2>

<ul>
  <li>Explore customer demographic and behavioral characteristics.</li>
  <li>Analyze customer responses across different campaign types.</li>
  <li>Build a classification model to predict campaign responses.</li>
  <li>Address the imbalance between responders and non-responders.</li>
  <li>Rank new customers by their predicted response probability.</li>
  <li>Support more focused and cost-effective marketing decisions.</li>
</ul>

<h2 align="center">❓ Business Questions</h2>

<ul>
  <li>Which customers are most likely to respond to a marketing campaign?</li>
  <li>How do customer characteristics relate to campaign response?</li>
  <li>Which campaign types generate the largest numbers of positive responses?</li>
  <li>Can a classification model help the marketing team prioritize customers?</li>
  <li>How can predicted probabilities support customer targeting decisions?</li>
</ul>

<h2 align="center">📊 Dataset</h2>

<p>
  This project uses the public
  <a href="https://github.com/ttchuang/dataset/blob/master/campaign.csv">
    campaign.csv dataset
  </a>
  from the ttchuang dataset repository.
</p>

<table>
  <thead>
    <tr>
      <th>Variable</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>CustomerID</code></td>
      <td>Unique customer identifier</td>
    </tr>
    <tr>
      <td><code>Age</code></td>
      <td>Customer age</td>
    </tr>
    <tr>
      <td><code>Gender</code></td>
      <td>Customer gender</td>
    </tr>
    <tr>
      <td><code>AnnualIncome</code></td>
      <td>Customer annual income</td>
    </tr>
    <tr>
      <td><code>SpendingScore</code></td>
      <td>Score representing customer spending behavior</td>
    </tr>
    <tr>
      <td><code>CampaignType</code></td>
      <td>Type of marketing campaign received</td>
    </tr>
    <tr>
      <td><code>PurchasedOnCampaign</code></td>
      <td>Target variable: 1 if the customer purchased and 0 otherwise</td>
    </tr>
  </tbody>
</table>

<h2 align = "center">🔎 Project Workflow</h2>

<ol>
  <li>Load and inspect the customer campaign dataset.</li>
  <li>Remove the unnecessary index column.</li>
  <li>Check data types and missing values.</li>
  <li>Explore numerical and categorical variables.</li>
  <li>Encode gender and campaign type.</li>
  <li>Define the model features and target variable.</li>
  <li>Split the data into training and testing sets.</li>
  <li>Standardize the numerical features.</li>
  <li>Train a balanced logistic regression model.</li>
  <li>Evaluate the model using multiple classification metrics.</li>
  <li>Generate response probabilities for new customers.</li>
  <li>Rank customers for targeted marketing outreach.</li>
</ol>

<h2 align="center">📈 Exploratory Data Analysis</h2>

<h3>Distribution of Numerical Variables</h3>

<p>
  The following histograms show the distributions of customer age, annual income,
  spending score, and campaign purchase response.
</p>

<p align="center">
  <img
    src="distribution-of-numerical-variables.png"
    alt="Distribution of Numerical Variables"
    width="850"
  >
</p>

<p>
  Customer age, annual income, and spending scores are distributed across broad
  ranges. The campaign response chart shows that substantially fewer customers
  purchased during the campaign, indicating an imbalanced target variable.
</p>

<br>

<h3>Customer Distribution by Gender</h3>

<p align="center">
  <img
    src="customer-distribution-by-gender.png"
    alt="Customer Distribution by Gender"
    width="650"
  >
</p>

<p>
  The dataset contains slightly more male customers than female customers.
  However, both groups are well represented in the dataset.
</p>

<br>

<h3>Customer Distribution by Campaign Type</h3>

<p align="center">
  <img
    src="customer-distribution-by-campaign-type.png"
    alt="Customer Distribution by Campaign Type"
    width="800"
  >
</p>

<p>
  Direct Mail and Social Media reached the largest numbers of customers.
  In-Store and Email campaigns reached slightly fewer customers.
</p>

<br>

<h3>Campaign Responses by Campaign Type</h3>

<p align="center">
  <img
    src="campaign-response-by-campaign-type.png"
    alt="Campaign Responses by Campaign Type"
    width="850"
  >
</p>

<p>
  Direct Mail generated the largest number of positive responses, followed
  closely by Social Media. Email produced the fewest positive responses among
  the four campaign types.
</p>

<p>
  Because the total customer counts differ across campaign types, response rates
  should also be calculated before concluding that one campaign type is more
  effective than another.
</p>

<h2 align="center">🛠️ Data Preparation</h2>

<p>The following preprocessing steps were completed:</p>

<ul>
  <li>Removed the unnecessary <code>Unnamed: 0</code> column.</li>
  <li>Checked the dataset for missing values.</li>
  <li>Converted <code>Gender</code> into numerical values.</li>
  <li>Converted <code>CampaignType</code> into dummy variables.</li>
  <li>Removed <code>CustomerID</code> from the model features.</li>
  <li>Divided the data into 70% training data and 30% testing data.</li>
  <li>Used stratification to preserve the original class distribution.</li>
  <li>Standardized <code>Age</code>, <code>AnnualIncome</code>, and <code>SpendingScore</code>.</li>
  <li>Fitted the scaler only on the training data to prevent data leakage.</li>
</ul>

<h3>Categorical Encoding</h3>

<p>
  Gender was converted into a binary numerical variable:
</p>

<pre><code>df["Gender"] = df["Gender"].map({
    "Male": 0,
    "Female": 1
})</code></pre>

<p>
  Campaign type was converted into separate dummy variables using one-hot encoding:
</p>

<pre><code>df = pd.get_dummies(
    df,
    columns=["CampaignType"],
    dtype=int
)</code></pre>

<h3>Training and Testing Split</h3>

<pre><code>X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.30,
    random_state=1,
    stratify=y
)</code></pre>

<p>
  Stratification preserves the proportion of responders and non-responders in
  both the training and testing sets.
</p>

<h2 align="center">🤖 Machine Learning Model</h2>

<p>
  This project uses logistic regression because the target variable is binary
  and the model produces interpretable response probabilities.
</p>

<pre><code>model = LogisticRegression(
    class_weight="balanced",
    max_iter=1000,
    random_state=1
)

model.fit(X_train, y_train)</code></pre>

<p>
  The <code>class_weight="balanced"</code> setting gives additional importance
  to the less common positive-response class. This helps the model identify
  potential responders instead of predicting only the majority class.
</p>

<h2 align="center">📋 Model Evaluation</h2>

<h3>Confusion Matrix</h3>

<p align="center">
  <img
    src="confusion-matrix.png"
    alt="Logistic Regression Confusion Matrix"
    width="650"
  >
</p>

<table>
  <thead>
    <tr>
      <th>Actual Class</th>
      <th>Predicted No Response</th>
      <th>Predicted Response</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>No Response</td>
      <td>27</td>
      <td>16</td>
    </tr>
    <tr>
      <td>Response</td>
      <td>10</td>
      <td>7</td>
    </tr>
  </tbody>
</table>

<h3>Evaluation Results</h3>

<table>
  <thead>
    <tr>
      <th>Measurement</th>
      <th>Result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>True Negatives</td>
      <td>27</td>
    </tr>
    <tr>
      <td>False Positives</td>
      <td>16</td>
    </tr>
    <tr>
      <td>False Negatives</td>
      <td>10</td>
    </tr>
    <tr>
      <td>True Positives</td>
      <td>7</td>
    </tr>
    <tr>
      <td>Testing Accuracy</td>
      <td>Approximately 56.7%</td>
    </tr>
    <tr>
      <td>Positive-Response Precision</td>
      <td>Approximately 30.4%</td>
    </tr>
    <tr>
      <td>Positive-Response Recall</td>
      <td>Approximately 41.2%</td>
    </tr>
    <tr>
      <td>Positive-Response F1-Score</td>
      <td>Approximately 35.0%</td>
    </tr>
  </tbody>
</table>

<h3>Model Interpretation</h3>

<ul>
  <li>
    The model correctly identified 27 customers who did not respond.
  </li>
  <li>
    The model correctly identified 7 customers who responded.
  </li>
  <li>
    The model incorrectly classified 16 non-responders as responders.
  </li>
  <li>
    The model missed 10 customers who responded to the campaign.
  </li>
  <li>
    The model identified approximately 41.2% of the actual positive responders.
  </li>
</ul>

<p>
  The balanced model successfully identified positive responders. This is an
  improvement over the original model, which achieved higher overall accuracy
  but predicted every customer as a non-responder.
</p>

<p>
  The decrease in overall accuracy is expected because the balanced model is no
  longer relying primarily on the majority class. For this business problem,
  identifying potential responders may be more valuable than maximizing overall
  accuracy.
</p>

<blockquote>
  The model provides a useful baseline, but additional model comparison,
  threshold tuning, and cross-validation are recommended before using it for
  real marketing decisions.
</blockquote>

<h2 align="center">👥 New Customer Predictions</h2>

<p>
  For new customers, the model generates a predicted response probability:
</p>

<pre><code>response_probabilities = model.predict_proba(
    new_customers
)[:, 1]</code></pre>

<p>
  The probabilities are added to the customer data, and customers are ranked
  from the highest to the lowest predicted probability.
</p>

<pre><code>new_customer_results["ResponseProbability"] = response_probabilities

new_customer_results = new_customer_results.sort_values(
    by="ResponseProbability",
    ascending=False
)</code></pre>

<p>
  Customers who meet the selected probability threshold can be recommended for
  marketing outreach.
</p>

<pre><code>target_customers = new_customer_results[
    new_customer_results["ResponseProbability"] &gt;= 0.50
]</code></pre>

<h2 align="center">💼 Business Application</h2>

<p>
  Instead of contacting every customer, the marketing team can use predicted
  response probabilities to prioritize customers who are more likely to make
  a purchase.
</p>

<p>The targeting threshold can be adjusted based on:</p>

<ul>
  <li>Campaign budget</li>
  <li>Marketing capacity</li>
  <li>Expected campaign return</li>
  <li>Cost of contacting customers</li>
  <li>Cost of missing a potential responder</li>
  <li>Desired number of target customers</li>
</ul>

<p>
  For example, a lower threshold may identify more potential responders but
  also increase the number of non-responders contacted. A higher threshold may
  reduce marketing costs but could miss customers who would have responded.
</p>

<h2 align="center">💡 Key Insights</h2>

<ul>
  <li>
    The dataset contains considerably more non-responders than responders.
  </li>
  <li>
    Direct Mail generated the highest number of positive responses.
  </li>
  <li>
    Email generated the lowest number of positive responses.
  </li>
  <li>
    Overall accuracy can be misleading when the target variable is imbalanced.
  </li>
  <li>
    The balanced model successfully identified some positive responders.
  </li>
  <li>
    Recall and F1-score are important metrics for evaluating campaign targeting.
  </li>
  <li>
    Predicted probabilities allow customers to be ranked by their likelihood of responding.
  </li>
  <li>
    The classification threshold should reflect campaign costs and business priorities.
  </li>
</ul>

<h2 align="center">💻 Technologies Used</h2>

<p>
  <img src="https://img.shields.io/badge/Python-3.13-blue" alt="Python">
  <img src="https://img.shields.io/badge/pandas-Data%20Analysis-purple" alt="pandas">
  <img src="https://img.shields.io/badge/NumPy-Numerical%20Computing-blue" alt="NumPy">
  <img src="https://img.shields.io/badge/Matplotlib-Visualization-orange" alt="Matplotlib">
  <img src="https://img.shields.io/badge/Seaborn-Visualization-lightblue" alt="Seaborn">
  <img src="https://img.shields.io/badge/scikit--learn-Machine%20Learning-yellow" alt="scikit-learn">
</p>

<ul>
  <li>Python</li>
  <li>pandas</li>
  <li>NumPy</li>
  <li>Matplotlib</li>
  <li>Seaborn</li>
  <li>scikit-learn</li>
  <li>Visual Studio Code</li>
  <li>GitHub</li>
</ul>

<h2 align="center">📁 Repository Structure</h2>

<pre><code>marketing-campaign-response-prediction/
├── marketing-campaign-response-prediction.py
├── README.md
├── campaign-response-by-campaign-type.png
├── confusion-matrix.png
├── customer-distribution-by-campaign-type.png
├── customer-distribution-by-gender.png
└── distribution-of-numerical-variables.png</code></pre>

<h2 align="center">🚀 How to Run the Project</h2>

<h3>1. Clone the repository</h3>

<pre><code>git clone https://github.com/annienguyentech/marketing-campaign-response-prediction.git</code></pre>

<h3>2. Open the project folder</h3>

<pre><code>cd marketing-campaign-response-prediction</code></pre>

<h3>3. Install the required libraries</h3>

<pre><code>python -m pip install numpy pandas matplotlib seaborn scikit-learn</code></pre>

<h3>4. Run the Python file</h3>

<pre><code>python marketing-campaign-response-prediction.py</code></pre>

<h2 align="center">🔮 Future Improvements</h2>

<ul>
  <li>
    Compare logistic regression with decision tree, random forest, and gradient
    boosting models.
  </li>
  <li>
    Use cross-validation to generate more reliable performance estimates.
  </li>
  <li>
    Tune the classification threshold based on marketing costs and expected returns.
  </li>
  <li>
    Evaluate ROC-AUC and precision-recall AUC.
  </li>
  <li>
    Analyze model coefficients to identify influential customer characteristics.
  </li>
  <li>
    Calculate and compare response rates across campaign types.
  </li>
  <li>
    Test the model using a larger customer dataset.
  </li>
  <li>
    Build an interactive Power BI or Streamlit dashboard.
  </li>
  <li>
    Track the financial impact of targeted marketing decisions.
  </li>
</ul>

<h2 align="center">⚠️ Limitations</h2>

<ul>
  <li>The dataset contains only 200 customer records.</li>
  <li>The positive-response class is smaller than the negative-response class.</li>
  <li>The current model has limited positive-response precision and recall.</li>
  <li>The model has not yet been validated using cross-validation.</li>
  <li>The results should not be used for real marketing decisions without further testing.</li>
</ul>

<h2 align="center">👩‍💻 Author</h2>

<p align="center">
  <strong>Annie Nguyen</strong>
</p>

<p align="center">
  Business Analytics and Economics Student at Gonzaga University
</p>

<p align="center">
  GitHub:
  <a href="https://github.com/annienguyentech">annienguyentech</a>
</p>

<h2 align="center">🙏 Acknowledgments</h2>

<p align="center">
  The dataset used in this project was provided by
  <a href="https://github.com/ttchuang/dataset">ttchuang</a>.
</p>