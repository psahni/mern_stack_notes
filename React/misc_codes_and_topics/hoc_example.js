export default function Table({ children }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Just a table</th>
        </tr>
      </thead>
      {children}
    </table>
  );
}

// Usage:-
<Table>
  <tr>
      <td>
      <button onClick={toggleCollapse}>Closed</button>
      </td>
      <td>CollapsedContent</td>
    </tr>
</Table>

// U created rows and cols, not header can be added in the parent component