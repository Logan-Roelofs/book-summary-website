import BookReview from '../../../components/ui/custom/bookreview';

const bookData = {
  title: "The Inner Game of Tennis",
  author: "Timothy Gallwey",
  chapters: [
    {
      number: 0,
      title: "Introduction",
      summary: "Gallwey argues that sports performance problems usually aren't technical (\"I know what to do, but I don't do what I know\"). Typical instruction overload fills the mind with verbal commands that create tension and inconsistency. He introduces the idea that peak play happens when the mind is quiet and fully present—what athletes call being \"in the zone.\" This sets up the book's central focus: improving the mental processes that allow your body to execute what you already know."
    },
    {
      number: 1,
      title: "Chapter 1: The Inner Game (Self 1 vs. Self 2) & Nonjudgmental Awareness",
      summary: "Gallwey splits the player into two selves: Self 1 (the talkative, judging, controlling voice) and Self 2 (the body's natural, automatic competence). Most performance breakdowns come from Self 1's interference—overthinking, trying too hard, and harsh evaluation. He shows how judgment (\"good/bad\") triggers tension, self-instruction, and self-fulfilling negative identities (\"I'm a bad server\"). The key skill introduced is nonjudgmental observation: see what happened clearly (like an umpire) without emotional labeling, which allows natural correction to occur."
    },
    {
      number: 2,
      title: "Chapter 2: Trusting Self 2 (\"Letting It Happen\")",
      summary: "This chapter builds respect for the body's built-in intelligence and timing, arguing Self 2 is vastly more capable than Self 1 assumes. Improvement requires trust: letting the body swing rather than attempting conscious micromanagement (which recruits unnecessary muscles and ruins fluidity). Self 1's proper role is to set intentions and then get out of the way. The chapter introduces programming Self 2 with images/feel, not words—because Self 2 learns best through sensory information."
    },
    {
      number: 3,
      title: "Chapter 3: Programming Self 2 (Results, Form, and Identity)",
      summary: "Gallwey explains three ways to communicate goals to Self 2: 1) Programming for results: hold a clear image of where you want the ball to go and let the body solve \"how.\" 2) Programming for form: show Self 2 a clear picture/feel of a specific mechanical change (e.g., flatter racket face), then allow it to happen without forcing. 3) Programming by identity (role-playing): temporarily \"act as if\" you're a confident, high-level player (or adopt a new style), which often releases suppressed capabilities by bypassing ego-limits. He includes practical experiments (target serving, habit-change drills) to help players feel the difference between forcing and allowing."
    },
    {
      number: 4,
      title: "Chapter 4: The Outer Game Basics (Technique Kept Simple)",
      summary: "Without turning into a mechanics manual, Gallwey gives \"master tips\" that simplify technique and reduce over-control. He emphasizes topspin as a reliable solution to keeping balls in, and encourages simple, natural swings rather than complicated fixes (like rollovers and manipulations). For volleys: no backswing and contact out in front; for serves: rhythm, toss consistency, flexible wrist, and a grip that allows snap; for smashes: treat it like a serve the opponent tossed for you. Throughout, he frames technique as observational checkpoints, not self-bludgeoning commands."
    },
    {
      number: 5,
      title: "Chapter 5: Changing Habits: A New Way of Learning",
      summary: "Gallwey contrasts the usual method (judge → command → try hard → judge again) with the Inner Game method (observe → image/feel-program → let happen → calm observe). He argues you don't \"fight\" old grooves; you start new grooves—like a child who stops crawling by learning walking, not by battling crawling. The chapter provides a step-by-step practice loop: nonjudgmental observation, clear programming, letting Self 2 execute, and patient attention while the new pattern stabilizes. A major warning: ego may prefer \"being in control\" over better results, so players must notice when Self 1 sneaks back in."
    },
    {
      number: 6,
      title: "Chapter 6: Concentration (How to \"Park\" the Mind)",
      summary: "Since the mind can't simply be \"turned off,\" Gallwey teaches concentration as placing attention on something real and immediate. He offers practical anchors: watching the seams, tracking trajectory, listening to the sound at contact, and feeling racket position and body rhythm. He explains that concentration keeps you in the here and now, preventing attention leaks into past regrets or future fears. Between points, focusing on breathing resets calm alertness and helps re-enter the present before the next rally."
    },
    {
      number: 7,
      title: "Chapter 7: \"Games People Play\" on the Tennis Court",
      summary: "Gallwey describes how many players aren't just playing tennis—they're playing ego-games: proving they're \"good,\" seeking approval, protecting status, or using tennis to manage relationships. He categorizes motives into broad games (e.g., \"Good-o,\" \"Friends-o,\" \"Health/Fun-o\") and shows how hidden motives increase tension and block spontaneity. He shares personal experiences of how self-image and competitive pressure distort performance. The chapter's takeaway: recognizing your real motive matters because ego-driven stakes sabotage freedom and learning."
    },
    {
      number: 8,
      title: "Chapter 8: Competition Reframed: Winning as Cooperation",
      summary: "Gallwey argues competition becomes destructive only when it's used to validate self-worth. In a healthier frame, your opponent is actually providing the obstacles that let you discover and extend your potential—so competition is a form of mutual cooperation. The best mindset shifts from obsessing over outcomes (which you can't fully control) to committing to maximum effort and presence (which you can). This reduces anxiety and often improves results, while making winning/losing less psychologically toxic."
    },
    {
      number: 9,
      title: "Chapter 9: Unfreakability, Letting Go, and the Larger Inner Game",
      summary: "The final chapter generalizes Inner Game principles beyond tennis: staying calm amid change, handling regret/fear/annoyance, and separating events from the mind's reactions. He critiques \"positive thinking\" as another form of mental distortion and emphasizes clear seeing, present-moment attention, and reduced attachment to outcomes. \"Letting go\" is presented as releasing the ego's grip on control so deeper intelligence and energy can emerge—often producing better performance and greater peace. Gallwey ends by pointing toward a deeper self (\"Self 3\") and frames the Inner Game as a lifelong path of awareness and self-realization, with tennis as a training ground."
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

