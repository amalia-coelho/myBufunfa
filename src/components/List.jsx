import '../styles/List.css';
import List_item from '../components/List_item';

export default function List() {
    return (
      <div className="list-container">
        <div className="list-header">
            <h4>Últimos registros</h4>
        </div>
        <div className="list-body">
            <List_item />
            <List_item />
            <List_item />
        </div>
        <div className="list-footer">
            <span>Informações no footer</span>
        </div>
      </div>
    );
  }