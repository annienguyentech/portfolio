export type Exhibit = { title: string; image: string; alt: string; points: string[] };
const img = (name: string) => `/portfolio/case-studies/${name}.webp`;
const exhibit = (title: string, name: string, points: string[]): Exhibit => ({
  title,
  image: img(name),
  alt: title,
  points,
});

export const extraProjects = {
  "capital-one-case-competition": {
    title: "Capital One Case Competition",
    category: "Business Strategy and AI",
    tools: ["Research", "Business Analysis", "AI Strategy", "Presentation"],
    summary:
      "A case competition proposal exploring how AI can make financial services more accessible to customers from different language and cultural backgrounds.",
    challenge:
      "Consider how Capital One could respond to a more diverse customer base through natural language processing, personalization, and responsible use of AI.",
    results: [
      "Proposed a framework combining multilingual communication, personalization, and localization.",
      "Considered implementation risks alongside the potential customer benefits.",
    ],
  },
  "costco-financial-modeling": {
    title: "Costco Financial Modeling",
    category: "Financial Analysis",
    tools: ["Excel", "Financial Modeling", "Forecasting", "Financial Statements"],
    summary:
      "An Excel model connecting Costco’s income statement, balance sheet, cash flow statement, and supporting forecast assumptions.",
    challenge:
      "Explore how assumptions about sales, costs, working capital, and financing flow through a connected financial model.",
    results: [
      "Built linked financial statement schedules with forecast periods from 2027P through 2031P.",
      "Made growth, capital expenditure, debt, and cash assumptions visible alongside the model outputs.",
    ],
  },
};

export const codeNotes: Record<string, string[]> = {
  "xmas-gift-analysis": ["The analytical view combines the fields needed for the sales questions in one place.", "Using the same view across queries helps keep time, customer, product, and market definitions consistent.", "Validate joins and transaction counts before comparing revenue or profit across groups."],
  "sales-optimization-analysis": ["The query counts distinct bookings by campaign, discount, and target customer segment.", "Blank campaign identifiers are excluded so they do not distort the promotion ranking.", "Use campaign frequency alongside revenue and margin. Frequent use alone does not establish that a promotion is profitable."],
  "marketing-campaign-response-prediction": ["Balanced class weights address the smaller response class during model training.", "Predictions are evaluated on held out test data rather than the training sample.", "Review response precision and recall, then test decision thresholds against the cost of outreach."],
};

export const caseExhibits: Record<string, Exhibit[]> = {
  "xmas-gift-analysis": [
    exhibit("Seasonal sales performance", "xmas-gift-analysis-q1-sales-performance", [
      "Compare revenue, units, costs, and profit across Christmas seasons rather than reviewing revenue alone.",
      "The latest season grew revenue by 2.01% and profit by 1.87% against the prior season.",
      "Use the modest growth trend to plan inventory carefully rather than assuming a large seasonal increase.",
    ]),
    exhibit("Purchase channels", "xmas-gift-analysis-q4-purchase-type-performance", [
      "In store purchases contribute more than 60% of seasonal revenue in this analysis.",
      "Compare the smaller online and Christmas market channels before allocating marketing spend.",
      "Protect store availability while testing targeted improvements to the smaller channels.",
    ]),
    exhibit("Product performance", "xmas-gift-analysis-q9.1-revenue-by-product-category", [
      "Toys and children’s products are the strongest revenue categories in the project findings.",
      "Review category revenue alongside profit before deciding which products to promote.",
      "Prioritize availability in leading categories and test smaller assortments in weaker ones.",
    ]),
  ],
  "revenue-plan-progress-analysis": [
    exhibit("01 Overview", "revenue-overview", [
      "This page brings actual revenue, year to date revenue, and plan comparisons into one view.",
      "The quarterly area chart and period matrix make gaps against plan easier to locate.",
      "Investigate the periods behind a shortfall before changing the full year forecast.",
    ]),
    exhibit("02 Store performance", "revenue-stores", [
      "In the displayed view, Cầu Giấy leads district revenue at approximately 6.0bn.",
      "Dốc Chợ Thành Công contributes 11.97% of revenue among the stores shown in the share chart.",
      "The store matrix totals 92% of plan in this view. Review the weakest store and month combinations before allocating support.",
    ]),
    exhibit("03 Product performance", "revenue-products", [
      "The product page compares revenue across brands, suppliers, categories, and individual products.",
      "The category treemap shows where revenue is concentrated, while the product ranking supports a closer review.",
      "Compare revenue contribution with plan completion before increasing inventory or promotional support.",
    ]),
    exhibit("04 Customer performance", "revenue-customers", [
      "In the displayed view, the WHITE loyalty group contributes 85.47% of revenue.",
      "Consultants represent 31.77% of revenue in the occupation comparison.",
      "Non discounted sales show 60% total growth in the promotion matrix. Review margin and comparable periods before attributing the result to pricing alone.",
    ]),
  ],
  "customer-behavior-and-segmentation-analysis": [
    exhibit("Customer behavior and RFM segments", "customers", [
      "The dashboard separates customers using recency, frequency, and monetary value.",
      "Customer count and revenue contribution answer different questions, so review both before prioritizing a segment.",
      "Use retention offers for valuable customers whose activity is declining, and test reactivation campaigns separately for inactive groups.",
    ]),
  ],
  "kpim-mart-sales-excel-dashboard": [
    exhibit("Sales performance in Excel", "excel", [
      "The project analyzes 58,414 transactions across 29 stores, 353 products, and 18,484 customers.",
      "Revenue, gross profit, and plan completion provide complementary views of store performance.",
      "Use the filters to investigate a store or product category before recommending changes to targets or inventory.",
    ]),
  ],
  "sales-optimization-analysis": [
    exhibit("Relational data model", "sales-model", [
      "The relational model connects flight, ticket, customer, and promotion data for a consistent analysis.",
      "Joining transactions to route and capacity information allows the analysis to distinguish demand from available seats.",
      "Validate keys and join relationships before using the results to compare route performance.",
    ]),
    exhibit("Route and promotion analysis", "sales-optimization-analysis-question-5", [
      "The SQL analysis examines route demand, capacity utilization, and coupon performance.",
      "Underfilled routes provide a place to investigate targeted offers rather than applying discounts to every flight.",
      "The project’s proposed 15% profitability opportunity is an analytical estimate, not an observed business result.",
    ]),
  ],
  "marketing-campaign-response-prediction": [
    exhibit(
      "Customer and response distributions",
      "marketing-campaign-response-prediction-distribution-of-numerical-variables",
      [
        "The response target is imbalanced, with fewer purchasers than non purchasers.",
        "Age, income, and spending behavior provide the numerical inputs explored before modeling.",
        "Use metrics for the response class alongside overall accuracy when comparing targeting models.",
      ],
    ),
    exhibit("Model evaluation", "marketing-matrix", [
      "The displayed confusion matrix has 27 true negatives, 16 false positives, 10 false negatives, and 7 true positives.",
      "That corresponds to approximately 56.7% accuracy and 41.2% recall for the response class.",
      "Precision is approximately 30.4%, so this remains a baseline model. Validate further and test campaign economics before using it for real outreach.",
    ]),
  ],
};

// The supplied previews are retained at their source resolution.
caseExhibits["customer-behavior-and-segmentation-analysis"][0].image = "/portfolio/customers.webp";
caseExhibits["kpim-mart-sales-excel-dashboard"][0].image = "/portfolio/excel.webp";

const capitalNotes = [
  [
    "Responding to diversity in financial services",
    [
      "The case focuses on how AI could support customers from different backgrounds.",
      "The proposal connects customer communication with financial inclusion.",
      "The following slides present research, a proposed approach, benefits, and implementation risks.",
    ],
  ],
  [
    "How AI is used in financial services",
    [
      "The presentation reviews chatbots, fraud prevention, wealth management, and credit assessment.",
      "These applications show that AI can support both customer service and internal decisions.",
      "Select a specific customer problem before choosing which AI capability to introduce.",
    ],
  ],
  [
    "Reviewing Capital One’s Eno",
    [
      "The case examines spending insights, fraud alerts, and financial advice features.",
      "It uses Eno as a starting point for identifying additional customer needs.",
      "Build on useful existing capabilities while evaluating language access and personalization.",
    ],
  ],
  [
    "Population and language context",
    [
      "The research examines demographic change and language needs in financial services.",
      "The chart provides context for serving a wider range of customers.",
      "Validate the needs of specific customer groups through research before designing a solution.",
    ],
  ],
  [
    "Language and customer access",
    [
      "The presentation compares language prevalence and demographic change.",
      "Language access is considered alongside the ability to understand financial information.",
      "Prioritize support using customer needs and service demand rather than population share alone.",
    ],
  ],
  [
    "Approach and findings",
    [
      "The case identifies an opportunity to strengthen language and cultural support.",
      "The approach considers communication, personalization, and access to services together.",
      "Test proposed changes with customers from the groups the service intends to support.",
    ],
  ],
  [
    "Proposed natural language processing solution",
    [
      "The proposal uses natural language processing to improve customer communication.",
      "The aim is to help individuals from different backgrounds understand and use financial services.",
      "Treat the proposal as a design recommendation that requires testing before implementation.",
    ],
  ],
  [
    "Solution framework",
    [
      "The framework brings together multilingual support, personalization, and translation.",
      "Separate these capabilities so each can be evaluated for accuracy and usefulness.",
      "Start with a focused service journey before expanding to more complex financial questions.",
    ],
  ],
  [
    "Implementation considerations",
    [
      "The comparison lays out how the proposed capabilities could be applied.",
      "Different features require different data, support processes, and evaluation methods.",
      "Define success measures and human review responsibilities before a rollout.",
    ],
  ],
  [
    "Anticipated benefits",
    [
      "The presentation considers customer understanding and personalization alongside business benefits.",
      "The benefits are anticipated outcomes of the proposal, not measured implementation results.",
      "Use customer feedback and service metrics to test whether the proposed benefits occur.",
    ],
  ],
  [
    "Technical and operational risks",
    [
      "The case considers technical integration, reliability, security, and scalability.",
      "The risk matrix connects prevention measures with likelihood and impact.",
      "Prioritize testing and monitoring for the risks with the greatest potential customer impact.",
    ],
  ],
  [
    "Adoption, privacy, and ethical risks",
    [
      "The proposal also considers customer acceptance, privacy, and ethical use.",
      "Communication and consent should be clear when customers interact with an AI supported service.",
      "Keep access to human assistance and review customer feedback during adoption.",
    ],
  ],
  [
    "Research references",
    [
      "The final slide records the research sources used in the competition presentation.",
      "The references support the case’s demographic and technology context.",
      "Refresh the research and validate assumptions before turning the proposal into a live initiative.",
    ],
  ],
] as [string, string[]][];
caseExhibits["capital-one-case-competition"] = capitalNotes.map(([title, points], i) =>
  exhibit(title, `capital-${i + 1}`, points),
);

caseExhibits["costco-financial-modeling"] = [
  exhibit("Cash flow model preview", "costco", [
    "The workbook connects operating, investing, and financing cash flows to the forecast cash balance.",
    "Projected values are driven by assumptions and should be read as model outputs rather than guaranteed outcomes.",
    "Review the assumptions and statement checks before using the model to support a financial decision.",
  ]),
];

caseExhibits["costco-financial-modeling"][0].image = "/portfolio/case-studies/costco-model.svg";
