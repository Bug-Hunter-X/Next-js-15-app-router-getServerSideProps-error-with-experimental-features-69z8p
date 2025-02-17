```javascript
// app/page.js

export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await res.json();

  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  );
}
```