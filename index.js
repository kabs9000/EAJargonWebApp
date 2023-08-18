const jargon = [
    {word: "Expected value", definition: "A concept from probability and statistics used to determine the average outcome of an uncertain event. In decision-making, it represents the average benefit one can expect from an action when considering both the potential outcomes and their probabilities."},
    {word: "Counterfactual reasoning", definition: "A method of thinking that involves considering what would have happened in the absence of a particular event or action."},
    // ... other definitions can be added similarly
    {
    word: "Longtermism",
    definition: "The perspective that one should primarily consider the long-term effects of one's actions, especially those that impact the far future."
},
{
    word: "Moral uncertainty",
    definition: "The state of being unsure about which moral principles or values are correct, and taking that uncertainty into account in decision-making."
},
{
    word: "Moral weight",
    definition: "The consideration of how much moral value or consideration an entity (e.g., a person, animal) should be given in moral calculations."
},
{
    word: "Wild animal suffering",
    definition: "Concern for the suffering experienced by animals in the wild due to natural causes, such as disease, hunger, or predation."
},
{
    word: "Effective animal advocacy",
    definition: "The use of evidence and reason to determine the most effective ways to improve the well-being of animals."
},
{
    word: "Global catastrophic risk",
    definition: "A risk that could cause severe harm to a significant portion of humanity, but not necessarily cause human extinction."
},
{
    word: "S-risks",
    definition: "Risks that could lead to scenarios that are worse than extinction, such as vast amounts of suffering."
},
{
    word: "Moral circle expansion",
    definition: "The idea of expanding the circle of entities that one considers morally relevant or worthy of moral consideration."
},
{
    word: "Diminishing returns",
    definition: "The principle that as more resources are invested in a particular intervention or cause area, the additional benefits gained (marginal utility) decrease."
},
{
    word: "Room for more funding (RFMF)",
    definition: "A consideration of whether additional funds in a particular area will lead to proportional positive outcomes, or if there are diminishing returns."
},


    {word: "Utilitarianism", definition: "An ethical theory that holds that the best action is the one that maximizes utility, typically defined in terms of well-being or happiness."},
    {word: "Longtermism", definition: "The perspective that emphasizes the value and moral importance of individuals who will live in the future, and the potential long-lasting effects of our actions."},
    {word: "Existential risk", definition: "A risk that threatens the premature extinction of Earth-originating intelligent life or the permanent and drastic destruction of its potential for future desirable development."},
    {word: "S-risks", definition: "Risks that might bring about suffering in astronomical amounts, even if they don't threaten extinction."},
    {word: "Moral uncertainty", definition: "The state of being unsure about moral truths or which moral framework to adopt when evaluating actions."},
    {word: "Moral circle expansion", definition: "The idea of expanding the circle of beings to whom we accord moral consideration and rights."},
    {word: "Wild animal suffering", definition: "The suffering experienced by non-human animals in natural environments due to factors like disease, hunger, and predation."},
    {word: "Superintelligence", definition: "An intellect that is much smarter than the best human brains in practically every field, including scientific creativity, general wisdom, and social skills."},
    {word: "Cooperative principles", definition: "Principles that guide how different actors can work together effectively and harmoniously for shared goals."},
    {word: "AI alignment", definition: "The challenge of building powerful AI systems that do what their operators intend without causing unintended negative consequences."},
    {word: "AI safety", definition: "The study of how to make artificial intelligence systems safe, and the promotion of the broad adoption of these research results across the AI community."},
    {word: "Global catastrophic risk", definition: "A risk that could cause severe harm to humanity on a global scale, even if it doesn't result in extinction."},
    {word: "Charity evaluator", definition: "An organization that assesses and rates charitable organizations based on factors like effectiveness, transparency, and need."},
    {word: "Flow-through effects", definition: "Secondary, indirect, or longer-term effects of an action, beyond the immediate and direct consequences."},
    {word: "Far future", definition: "The time beyond the foreseeable future, spanning millennia or even longer time scales."},
    {word: "Impact assessment", definition: "Evaluation of the effects, both positive and negative, of an intervention or action."},
    {word: "Hedonic treadmill", definition: "The observed tendency of humans to maintain a relatively stable level of happiness despite changes in fortune or the achievement of major goals."},
    {word: "Moral weight", definition: "The degree of moral consideration or value ascribed to a being's experiences or interests."},
    {word: "Neglectedness", definition: "The extent to which an issue or cause area has been overlooked or underfunded relative to its importance."},
    {word: "Philanthropic advising", definition: "Guidance provided to individuals, foundations, or organizations on how to achieve the most impact with their charitable giving."},
    {word: "Rationality", definition: "The quality of being logical and consistent in thought, often associated with the ability to think clearly, reason well, and make optimal decisions."},
    {word: "Sentience", definition: "The capacity to have subjective experiences and feelings, often used as a criterion for moral consideration."},
    {word: "Speciesism", definition: "The assumption of human superiority leading to the exploitation of animals."},
    {word: "Value drift", definition: "A gradual change or shift in one's values over time, away from what they were previously."},
    {word: "Virtue ethics", definition: "An ethical theory that emphasizes the virtues, or moral character, rather than following a set of rules."},
    {word: "Earning to give", definition: "A strategy where individuals pursue high-earning careers with the intention of donating a significant portion of their income to effective charities."},
    {word: "GiveWell", definition: "A nonprofit charity evaluator focused on finding and promoting the most effective giving opportunities."},
    {word: "Effective animal advocacy", definition: "The use of evidence and reason to identify the most effective ways to help animals."},
    {word: "Future of Humanity Institute", definition: "A multidisciplinary research institute at the University of Oxford that studies big-picture questions about humanity and its prospects."},
    {word: "Open Philanthropy", definition: "A philanthropic organization that aims to identify outstanding giving opportunities and make grants."},
    {word: "Moral patienthood", definition: "The status of being owed moral consideration, often based on the capacity for subjective experience."},
    {word: "Total view", definition: "An ethical view that values the total amount of happiness over all beings, as opposed to average happiness per being."},

];

const searchBar = document.getElementById('searchBar');
const jargonTable = document.getElementById('jargonTable').querySelector('tbody');
const newWordInput = document.getElementById('newWord');
const newDefinitionInput = document.getElementById('newDefinition');
const addButton = document.getElementById('addButton');

// Populate the table with words and definitions
function populateTable() {
    jargonTable.innerHTML = '';  // Clear the table first
    jargon.forEach(term => {
        const row = document.createElement('tr');

        const wordTd = document.createElement('td');
        wordTd.textContent = term.word;
        row.appendChild(wordTd);

        const defTd = document.createElement('td');
        defTd.textContent = term.definition;
        row.appendChild(defTd);

        jargonTable.appendChild(row);
    });
}

populateTable();

// Improved Search
searchBar.addEventListener('input', (e) => {
    const searchTerm = e.target.value.trim().toLowerCase();  // Trimmed and case-insensitive
    Array.from(jargonTable.children).forEach(row => {
        const term = row.firstElementChild.textContent;
        const definition = row.lastElementChild.textContent;
        if (term.toLowerCase().includes(searchTerm) || definition.toLowerCase().includes(searchTerm)) {
            row.style.display = 'table-row';
        } else {
            row.style.display = 'none';
        }
    });
});

// High Contrast Mode
const contrastToggle = document.getElementById('contrastToggle');
contrastToggle.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
});

// Keyboard Navigation for adding a term
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && (document.activeElement === newWordInput || document.activeElement === newDefinitionInput)) {
        addButton.click();
    }
});

// Add new term and definition
addButton.addEventListener('click', () => {
    const newWord = newWordInput.value.trim();
    const newDefinition = newDefinitionInput.value.trim();

    if (newWord && newDefinition) {  // Check if both inputs are non-empty
        jargon.push({
            word: newWord,
            definition: newDefinition
        });
        populateTable();  // Refresh the table with the new term
        showToast('Term Added Successfully!');  // Display feedback
        newWordInput.value = '';  // Clear input fields
        newDefinitionInput.value = '';
    } else {
        showToast('Please provide both a term and its definition.');
    }
});

// Feedback Toast Functionality
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;

    document.body.appendChild(toast);
    toast.style.display = 'block';

    setTimeout(() => {
        toast.style.display = 'none';
        document.body.removeChild(toast);
    }, 2000);
}
