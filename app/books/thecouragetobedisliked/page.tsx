import BookReview from '../../../components/ui/custom/bookreview';

const bookData = {
  title: "The Courage to be Disliked",
  author: "Ichiro Kishimi and Fumitake Koga",
  chapters: [
    {
      number: 1,
      title: "Deny Trauma",
      summary: "In the opening chapter of The Courage to Be Disliked, we're introduced to Adlerian psychology's refreshing take on trauma, anger, and personal change. It boldly claims that our past traumas don't have to dictate our future. Instead, we possess the power to reshape our perceptions of the past and choose our reactions. The concept of teleology is central here, suggesting that our future goals, rather than past events, should guide our behavior. This perspective empowers us to view ourselves not as victims of our past but as architects of our future. Through a dialogue between a Philosopher and a Youth, the narrative explores how unhappiness and resistance to change stem from a lack of courage to embrace a new way of life. Anger is redefined not as an uncontrollable force but as a strategic tool for asserting dominance or avoiding tough conversations. The chapter underscores the Adlerian belief in the potential for change, urging us to focus on present goals and the meanings we assign to our experiences, rather than being tethered to our past. Key themes include rejecting the deterministic power of trauma, understanding the strategic construction of emotions like anger, and the crucial roles of self-acceptance and personal responsibility in finding happiness. The chapter concludes with a call to action for embracing change, emphasizing that our present choices shape our happiness and life trajectory."
    },
    {
      number: 2,
      title: "All Problems Are Interpersonal Relationship Problems",
      summary: "The second chapter delves into Adlerian psychology's view that the root of most personal issues lies in our interpersonal relationships. It promotes the ideas of courage, self-improvement, and nurturing social interest over competing and comparing ourselves with others. The discussion begins with self-dislike, attributing it to fear of rejection and avoidance of relationships as a defense mechanism. It argues that at their core, all problems are related to how we interact with others. Feelings of inferiority are presented as perceptions rather than facts, showing how our perspectives influence our self-esteem and happiness. The chapter critiques the inferiority complex and bragging as misguided attempts to deal with these feelings, advocating for self-improvement instead of competition. It also encourages moving past power struggles and revenge in relationships, promoting effective communication and recognizing that admitting fault is not a sign of weakness. Overcoming challenges, it suggests, involves seeing problems through the lens of interpersonal dynamics and approaching life's tasks—work, friendship, love—with a mindset of collaboration rather than opposition. The chapter emphasizes the importance of genuine connections and shifts from a psychology of possession to one of practice, focusing on proactive use of one's abilities."
    },{
      number: 3,
      title: "Discard Other Peoples Tasks",
      summary: "Chapter 3 focuses on achieving personal freedom within the realm of interpersonal relationships. It highlights the importance of self-reliance, the dangers of seeking approval, and the need to establish clear boundaries. The chapter advocates for concentrating on our own responsibilities, distinguishing between what we should manage and what should be left to others. This approach promises a life of less burden and greater autonomy. It cautions against the trap of desiring recognition, which can link our happiness to others' opinions and hinder true freedom. Instead, it encourages living by our own values and not seeking external validation. The discussion on task separation underlines respecting others' autonomy and suggests that offering support without overstepping boundaries fosters healthier relationships and personal growth. Emphasizing the power of being disliked, the chapter argues that real freedom comes from self-acceptance and authenticity, regardless of others' approval. It concludes with an empowering message: by focusing on self-reflection and perspective change, we can transform and enrich our relationships."
    },{
      number: 4,
      title: "Where the Center of the World Is",
      summary: "The fourth chapter shifts focus from individualism to a broader sense of community through Adlerian psychology. It introduces holism, the idea that we are indivisible beings, challenging the separation of mind and body or reason and emotion. The text argues for a community-centric view of interpersonal relationships, advocating for empathy and cooperation that extends beyond our immediate circles to all of humanity. It critiques self-centered behavior, suggesting that true fulfillment comes from contributing to the community rather than expecting it to serve us. Recognizing ourselves as part of a larger whole is presented as key to personal growth and happiness. The chapter also discusses the roles of praise and rebuke, promoting encouragement and equal, respectful relationships instead. It posits that feeling valued comes from gratitude and mutual appreciation, affirming everyone's inherent worth and contributions to the community. In summary, this chapter calls for a shift from self-centeredness to community awareness, emphasizing holistic self-understanding, fostering community feelings, and establishing supportive, equal relationships."
    },{
      number: 5,
      title: "To Live in Earnest in the Here and Now",
      summary: "The final chapter, To Live in Earnest in the Here and Now, stresses the importance of engaging with life and others in the present moment. It argues against excessive self-focus, which can prevent meaningful community engagement, advocating for self-acceptance and continuous self-improvement. Distinguishing between trust and confidence, it promotes unconditional trust in others to deepen relationships, despite potential vulnerabilities. The chapter sees work and contributing to the common good as vital for self-worth and community belonging, critiquing workaholism as a distraction from genuine self-acceptance and engagement. Happiness, it suggests, comes from feeling useful to others, not from external validation. It challenges the pursuit of being special, advocating for the value found in normalcy, self-acceptance, and community contribution. Encouraging living in the present like dancing, the chapter advocates for focusing on the process rather than outcomes, allowing for fulfillment in the moment and finding personal meaning through action."
    }
  ]
};

export default function Page() {
  return (
    <div>
      <BookReview 
        title={bookData.title} 
        author={bookData.author} 
        chapters={bookData.chapters} 
      />
    </div>
  );
}