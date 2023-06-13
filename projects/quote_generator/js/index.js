const generatorBtn = document.querySelector("#generator-button")
const authorArea = document.querySelector("#author-area")
const quoteArea = document.querySelector("#quote-area")

const quoteList = [
    {
        quote : "O! many a shaft, at random sent, Finds mark the archer little meant! And many a word, at random spoken, May soothe or wound a heart that's broken!",
        author : "Walter Scott"
    },

    {
        quote : "Anyone who attempts to generate random numbers by deterministic means is, of course, living in a state of sin.",
        author : "John von Neumann"
    },

    {
        quote : "Self-control means wanting to be effective at some random point in the infinite radiations of my spiritual existence.",
        author : "Franz Kafka"
    },

    {
        quote : "It is necessary to fall in love... if only to provide an alibi for all the random despair you are going to feel anyway.",
        author : "Albert Camus"
    },

    {
        quote : "Human well-being is not a random phenomenon. It depends on many factors - ranging from genetics and neurobiology to sociology and economics. But, clearly, there are scientific truths to be known about how we can flourish in this world. Wherever we can have an impact on the well-being of others, questions of morality apply.",
        author : "Sam Harris"
    },

    {
        quote : "I don't believe that if you do good, good things will happen. Everything is completely accidental and random. Sometimes bad things happen to very good people and sometimes good things happen to bad people. But at least if you try to do good things, then you're spending your time doing something worthwhile.",
        author : "Helen Mirren"
    },

    {
        quote : "I believe life is an intelligent thing: that things aren't random.",
        author : "Steve Jobs"
    },

    {
        quote : "Together we can change the world, just one random act of kindness at a time.",
        author : "Ron Hall"
    },

    {
        quote : "Everything happening around me is very random. I am enjoying the phase, as the journey is far more enjoyable than the destination.",
        author : "Sushant Singh Rajput"
    },

    {
        quote : "Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you.",
        author : "Princess Diana"
    }
]

generatorBtn.addEventListener("click", () => {
    const randomIndex = Math.floor((Math.random() * quoteList.length))

    authorArea.innerText = quoteList[randomIndex].author
    quoteArea.innerText = quoteList[randomIndex].quote
})