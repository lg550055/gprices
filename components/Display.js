import axios from "axios"

export default function Display({ items }) {

  async function deleteItem(id) {
    const url = 'https://q3w9rey5g0.execute-api.us-east-2.amazonaws.com/items/'+id
    await axios.delete(url)
    console.log(id)
  }
  return (
    <>
      {items.map(item =>
        <div key={item.id}>
          <button onClick={()=>deleteItem(item.id)}>
            {item.category} - {item.brand} {item.name} <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" height="20px" color="blue" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg>
          </button>
          <p>{item.price}, {item.size} {item.unit} - ${item.ppunit} per {item.unit}</p>
        </div>
      )}
    </>
  )
}