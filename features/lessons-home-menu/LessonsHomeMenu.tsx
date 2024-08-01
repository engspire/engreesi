import CategoryCard from "./components/CategoryCard"; // Adjust the import path as necessary

function LessonsHomeMenu() {
  return (
    <div className="mt-4 flex flex-wrap gap-3 z-0">
      <CategoryCard
        href="/grammar-lessons"
        title="Grammar"
        description="We have dozens of articles you can read to improve your grammar knowledge."
        imageSrc="/images/english-grammar.png"
        imageAlt="English Grammar"
      />
      <CategoryCard
        href="/word-lists/irregular-verbs"
        title="Irregular Verbs"
        description="You have to memorize these verbs just because you can't add '-ed' to get V2 and V3 forms."
        imageSrc="/images/studying-students.png"
        imageAlt="Irregular Verbs"
      />
      <CategoryCard
        href="/word-lists/word-families"
        title="Word Families"
        description="You can boost your vocabulary by studying words that are related to one another."
        imageSrc="/images/words.jpg"
        imageAlt="Word Families"
      />
      <CategoryCard
        href="/essential-verbs"
        title="Essential Verbs"
        description="Verbs are the most important class of words to know when learning English."
        imageSrc="/images/ladders.jpg"
        imageAlt="Essential Verbs"
      />
      <CategoryCard
        href="/tongue-twisters"
        title="Tongue Twisters"
        description='"If practice makes perfect and perfect needs practice, I&apos;m perfectly practised and practically perfect."'
        imageSrc="/images/mouths.png"
        imageAlt="Tongue Twisters"
      />
      <div className="card z-0 h-fit max-w-xs">
        <div className="card-body">
          <h3 className="text-2xl font-semibold">There&apos;s more...</h3>
          <div className="flex flex-row gap-2">
            <div className="inline md:hidden">
              <button
                onClick={() => {
                  const hamburgerButton =
                    document.getElementsByClassName("nextra-hamburger");
                  (hamburgerButton[0] as HTMLButtonElement).click();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
            <p className="">
              See the menu for more lessons like useful expressions,
              conversations, etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LessonsHomeMenu;
