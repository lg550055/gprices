import axios from "axios";

export default function AddForm(){

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
    const reqObj = {
      id: '11',
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
  }

  return (
    <form method="PUT" onSubmit={handleSubmit}>
      <input placeholder="Name" name="name" required />
      <input placeholder="Brand" name="brand" required /><br></br>
      <input placeholder="Category" name="category" required />
      <input placeholder="Size" name="size" required /><br></br>
      <input placeholder="Unit" name="unit" title="unit of measure" required />
      <input placeholder="Price" name="price" required /><br></br>
      <button>Submit</button>
    </form>
  )
}