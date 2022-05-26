import './SearchBar.css';

export default function SearchBar({filterText, onFilterTextChange}) {
  return (
    <form>
      <div className="searchbar">
      <input 
      type="text" 
      placeholder="Search..."
      value={filterText} 
      onChange={(e) => onFilterTextChange(e.target.value)}
      />
      </div>
    </form>
  );
}