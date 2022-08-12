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
    const reqObj = {
      id: '16',
      name: e.target.name.value,
      brand: e.target.brand.value,
      category: e.target.category.value,
      size: e.target.size.value *1,
      unit : e.target.unit.value,
      price: e.target.price.value *1,
      ppunit: (e.target.price.value/e.target.size.value).toFixed(1)
    }
    console.log(reqObj)
    putItem(reqObj)
    // e.target.reset()
  }

  return (
    <form method="PUT" onSubmit={handleSubmit}>
      <input placeholder="name" name="name" required /><br></br>
      <input placeholder="brand" name="brand" required /><br></br>
      <input placeholder="category" name="category" required /><br></br>
      <input placeholder="size" name="size" required /><br></br>
      <input placeholder="unit" name="unit" required /><br></br>
      <input placeholder="price" name="price" required /><br></br>
      <button>Submit</button>
    </form>
  )
}