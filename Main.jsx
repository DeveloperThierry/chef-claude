export default function Main(){
    return(<main>
        <form className="add-ingredient-form">
            <input
            type="text"
            placeholder="e.g. oregano"
            aria-label="Add ingredient"
            />
            <button>Add Ingredient</button>
        </form>
    </main>)
}