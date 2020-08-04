import marina from "../images/marina.png"
import guillaume from "../images/guillaume.png"
import tyler from "../images/tyler.png"
import steve from "../images/steve.png"

export const subscriptions = [
  {
    id: 1,
    title: "Free",
    monthly_price: "$0",
    annual_price: "$0",
    features: ["Up to 10 users", "Up to 20 devices", "No credit card required"],
    btn_label: "Try it for free",
    highlight: false,
  },
  {
    id: 2,
    title: "Starter",
    monthly_price: "$20",
    annual_price: "$192",
    features: [
      "Up to 50 users",
      "Up to 100 devices",
      "Remote control",
      "Scheduled upgrade",
    ],
    btn_label: "Subscribe",
    highlight: true,
  },
  {
    id: 3,
    title: "Pro",
    monthly_price: "$40",
    annual_price: "$384",
    features: [
      "Up to 500 users",
      "Up to 1000+ devices",
      "Remote control",
      "Scheduled upgrade",
      "Push notifications",
    ],
    btn_label: "Subscribe",
    highlight: false,
  },
  {
    id: 4,
    title: "Enterprise",
    monthly_price: "Custom",
    annual_price: "Custom",
    features: [
      "Unlimited users",
      "Unlimited devices",
      "Remote control",
      "Scheduled upgrade",
      "Push notifications",
    ],
    btn_label: "Subscribe",
    highlight: false,
  },
]

export const team = [
  {
    id: 1,
    picture: marina,
    name: "Marina Baskova",
    title: "Software Engineer",
    github: "https://github.com/MarinaBaskova",
    linkedin: "https://www.linkedin.com/in/marina-baskova",
    portfolio: "https://www.marinabaskova.com",
  },
  {
    id: 2,
    picture: guillaume,
    name: "Guillaume Savy",
    title: "Software Engineer",
    github: "https://github.com/guillsav",
    linkedin: "https://www.linkedin.com/in/guillaume-savy",
    portfolio: "https://www.guillaume-savy.com",
  },
  {
    id: 3,
    picture: tyler,
    name: "Tyler Foreman",
    title: "Software Engineer",
    github: "https://github.com/tjforeman",
    linkedin: "https://www.linkedin.com/in/tylerforeman1",
  },
  {
    id: 4,
    picture: steve,
    name: "Steve Rollins",
    title: "Software Engineer",
    github: "https://github.com/greenhornsr",
    linkedin: "https://linkedin.com/in/steven-rollins",
    portfolio: "http://www.steven-rollins.com/",
  },
]
