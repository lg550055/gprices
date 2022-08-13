import axios from "axios";

export default function AddForm({ item, setItem, item0 }){

  async function putItem(reqObj) {
    try {
      // TODO: Use appropriate CORS headers and settings
      const url = 'https://q3w9rey5g0.execute-api.us-east-2.amazonaws.com/items';
      await axios.put(url, reqObj)
    } catch (err) {
      console.log(err)
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: Generate unique id for new items
    let id = ''
    if(item.name) {
      id = item.id
    } else {
      id = '23'
    }
    const reqObj = {
      id: id,
      name: e.target.name.value,
      brand: e.target.brand.value,
      category: e.target.category.value,
      size: e.target.size.value *1,
      unit : e.target.unit.value,
      price: e.target.price.value *1,
      ppunit: (e.target.price.value/e.target.size.value).toFixed(1)
    }
    putItem(reqObj)
    e.target.reset()
    setItem(item0)
  }

  return (
    <form method="PUT" onSubmit={handleSubmit}>
      <input placeholder="Name" name="name" required defaultValue={item.name} />
      <input placeholder="Brand" name="brand" required defaultValue={item.brand} /><br></br>
      <input placeholder="Category" name="category" required defaultValue={item.category} />
      <input placeholder="Size" name="size" required defaultValue={item.size} /><br></br>
      <input placeholder="Unit" name="unit" title="unit of measure" required defaultValue={item.unit} />
      <input placeholder="Price" name="price" required defaultValue={item.price} /><br></br>
      <button>Submit</button>
    </form>
  )
}