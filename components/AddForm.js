export default function AddForm(){
  return (
    <form method="PUT">
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