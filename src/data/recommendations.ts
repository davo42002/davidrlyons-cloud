// LinkedIn recommendations (received). Verbatim, minor OCR typo fixes only.

export interface Recommendation {
  name: string;
  title: string;
  relation: string;
  quote: string;
}

export const recommendations: Recommendation[] = [
  {
    name: "Deidra Winzer",
    title: "Director of Operations",
    relation: "Worked with David on the same team",
    quote:
      "I had the extreme pleasure of working side by side with David as a Joint Corridor Manager at the SDC in Texas. He is far and away the most dedicated individual I have met in the ten years of my railroad career. David has a quick intellect, excellent communication and written skills, and possesses extreme integrity. His contributions were absolutely invaluable, and it seems there's no challenge too big for David to tackle.",
  },
  {
    name: "Larry Bell",
    title: "Regional Airline Captain",
    relation: "Worked with David in a management role for ~10 years",
    quote:
      "I worked side-by-side with David in a management role for nearly 10 years. David always goes above and beyond, working outside the box, to resolve issues and save cost, all while producing top-notch results for employees and customers. I highly recommend him for the logistics/operations management fields if your company is looking for new ways to produce an outstanding product — benefiting both customers and employees while saving money.",
  },
  {
    name: "Matt Lyons",
    title: "Retired from Union Pacific Railroad",
    relation: "Was senior to David",
    quote:
      "As a manager at Union Pacific, David exhibited the utmost professionalism, a work ethic second to none, an insatiable desire to learn and improve, strong leadership skills, and an ability to inspire others through empowerment and personal example. David will be a very valuable asset to any organization.",
  },
  {
    name: "Jim Hays",
    title: "Manager at BNSF Railway",
    relation: "Worked with David on the same team",
    quote:
      "I worked with David for several years on a territory of railroad jointly owned by BNSF and UPRR. I found him to be a very professional, intelligent, diligent, and honorable person who was a great partner. He will excel in any position requiring planning and decision making, and is an excellent motivator of the people around him.",
  },
];
