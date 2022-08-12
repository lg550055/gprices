export default function Display({ items }) {
  return (
    <>
      {items.map(item =>
        <div key={item.id}>
          <p>{item.category} - {item.brand} {item.name}</p>
          <p>{item.price}, {item.size} {item.unit} - ${item.ppunit} per {item.unit}</p>
        </div>
      )}
    </>
  )
}