import BookReview from '../../../components/ui/custom/bookreview';

const bookData = {
  title: "Dopamine Nation",
  author: "Anna Lembke",
  chapters: [
    {
      number: 1,
      title: "1: Our Masturbation Machines",
      summary: "example"
    },
    {
      number: 2,
      title: "2: Running from Pain",
      summary: "example"
    },{
      number: 3,
      title: "3: The Pleasure-Pain Balance",
      summary: "example"
    },{
      number: 4,
      title: "4: Dopamine Fasting",
      summary: "example"
    },{
      number: 5,
      title: "5: Space, Time, and Meaning",
      summary: "example"
    },{
      number: 6,
      title: "6: A Broken Balance?",
      summary: "example"
    },{
      number: 7,
      title: "7: Pressing on the Pain Side",
      summary: "example"
    },{
      number: 8,
      title: "8: Radical Honesty",
      summary: "example"
    },{
      number: 9,
      title: "9: Prosocial Shame",
      summary: "example"
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