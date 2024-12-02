'use client';

import { useRouter } from 'next/navigation';

export default function ItemList({ items }) {
  const router = useRouter();

  const handleDelete = async (id) => {
    await fetch(`/api/delete-item?id=${id}`, { method: 'DELETE' });
    router.refresh(); // Refresh to update the list after deletion
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name}
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
