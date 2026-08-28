export type GalleryItem = {
  src: string;
  caption: string;
};

const raw = (repo: string, path: string) =>
  `https://raw.githubusercontent.com/annienguyentech/${repo}/main/${path
    .split("/")
    .map(encodeURIComponent)
    .join("/")}`;

export const projectGallery: Record<string, GalleryItem[]> = {
  "xmas-gift-analysis": [
    ["query results/q1-sales-performance.png", "Q1 — Overall sales performance"],
    ["query results/q2-lastest-growth.png", "Q2 — Latest period growth"],
    ["query results/q3-revenue-growth.png", "Q3 — Revenue growth trend"],
    [
      "query results/q4-purchase-type-performance.png",
      "Q4 — Purchase type performance",
    ],
    ["query results/q5.1-country-performance.png", "Q5.1 — Country performance"],
    ["query results/q5.2-city-performance.png", "Q5.2 — City performance"],
    [
      "query results/q6.1-country-ranking-by-revenue.png",
      "Q6.1 — Country ranking by revenue",
    ],
    [
      "query results/q6.2-country-ranking-by-revenue-growth.png",
      "Q6.2 — Country ranking by revenue growth",
    ],
    ["query results/q7.1-revenue-by-age-group.png", "Q7.1 — Revenue by age group"],
    ["query results/q7.2-revenue-by-gender.png", "Q7.2 — Revenue by gender"],
    [
      "query results/q7.3-revenue-by-purchase-type.png",
      "Q7.3 — Revenue by purchase type",
    ],
    [
      "query results/q8.1-revenue-share-by-purchase-type-for-age-group.png",
      "Q8.1 — Purchase type revenue share by age group",
    ],
    [
      "query results/q8.2-revenue-share-by-paymen-method-for-age-group.png",
      "Q8.2 — Payment method revenue share by age group",
    ],
    [
      "query results/q9.1-revenue-by-product-category.png",
      "Q9.1 — Revenue by product category",
    ],
    [
      "query results/q9.2-revenue-by-product-type.png",
      "Q9.2 — Revenue by product type",
    ],
    [
      "query results/q10.1-days-of-week-performance.png",
      "Q10.1 — Day of week performance",
    ],
    ["query results/q10.2-hours-performance.png", "Q10.2 — Hourly performance"],
  ].map(([path, caption]) => ({
    src: raw("xmas-gift-analysis", path as string),
    caption: caption as string,
  })),

  "sales-optimization-analysis": [
    ["ERD-diagram.jpeg", "Database ERD diagram"],
    ["question-1.jpeg", "Query 1 — Result set"],
    ["question-2.png", "Query 2 — Result set"],
    ["question-3.png", "Query 3 — Result set"],
    ["question-4.png", "Query 4 — Result set"],
    ["question-5.png", "Query 5 — Result set"],
  ].map(([path, caption]) => ({
    src: raw("sales-optimization-analysis", path as string),
    caption: caption as string,
  })),

  "marketing-campaign-response-prediction": [
    ["distribution-of-numerical-variables.png", "Distribution of numerical variables"],
    ["customer-distribution-by-gender.png", "Customer distribution by gender"],
    [
      "customer-distribution-by-campaign-type.png",
      "Customer distribution by campaign type",
    ],
    ["campaign-response-by-campaign-type.png", "Campaign response by campaign type"],
    ["confusion-matrix.png", "Logistic regression confusion matrix"],
  ].map(([path, caption]) => ({
    src: raw("marketing-campaign-response-prediction", path as string),
    caption: caption as string,
  })),

  "kpim-mart-sales-excel-dashboard": [
    {
      src: raw("kpim-mart-sales-excel-dashboard", "images/kpim-mart-dashboard.png"),
      caption: "KPIM Mart interactive Excel dashboard",
    },
  ],

  "revenue-plan-progress-analysis": [
    {
      src: raw("revenue-plan-progress-analysis", "KPIM Logo.jpg"),
      caption: "KPIM revenue plan progress report",
    },
  ],

  "customer-behavior-and-segmentation-analysis": [
    {
      src: raw("customer-behavior-and-segmentation-analysis", "KPIM Mart Background.jpg"),
      caption: "KPIM Mart customer segmentation dashboard",
    },
  ],
};
