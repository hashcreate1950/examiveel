export default async function ProductPage({ params }) {
  const { id } = await params;

  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const p = await res.json();

  return (
    <div>
      <h1>{p.title}</h1>
      <img src={p.image} width={300} />
      <p>{p.description}</p>
      <div>${p.price}</div>
    </div>
  );
}
