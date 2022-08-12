export default function Display({ items }) {
  return (
    <>
      {items.map(item =>
        <div>
          <p>{item.name}</p>
        </div>
      )}
    </>
  )
}