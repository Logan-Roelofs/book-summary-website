import BookReview from '../../../components/ui/custom/bookreview';

const bookData = {
  title: "Dopamine Nation",
  author: "Anna Lembke",
  chapters: [
    {
      number: 1,
      title: "1: Our Masturbation Machines",
      summary: "The author, a psychiatrist, describes a patient who is addicted to a masturbation machine that he has created for himself. A machine that provides him with pleasure like no other. The author adresses that in our modern world, we all have our 'Masturbation Machines' that we are addicted to. These machines are our smartphones, social media, or even romance novels that provide us with gratification. We often find ourselves addicted to these 'machines' and are unable to break free from them, although we often feel worse after using them. The author explains that our overindulgence in these 'machines' is increasinly more common and is leading to a dopamine crisis. 70% of the worlds deaths are attributable to modifiable behavioral risks factors like smokin, physical inactivity, and poor diet. We are literally killing ourselves with our 'masturbation machines'."
    },
    {
      number: 2,
      title: "2: Running from Pain",
      summary: "Coming soon"
    },{
      number: 3,
      title: "3: The Pleasure-Pain Balance",
      summary: "Coming soon"
    },{
      number: 4,
      title: "4: Dopamine Fasting",
      summary: "Coming soon"
    },{
      number: 5,
      title: "5: Space, Time, and Meaning",
      summary: "Coming soon"
    },{
      number: 6,
      title: "6: A Broken Balance?",
      summary: "Coming soon"
    },{
      number: 7,
      title: "7: Pressing on the Pain Side",
      summary: "Coming soon"
    },{
      number: 8,
      title: "8: Radical Honesty",
      summary: "Coming soon"
    },{
      number: 9,
      title: "9: Prosocial Shame",
      summary: "Coming soon"
    },
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