import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BlocNotes = () => {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);
  const doctorId = localStorage.getItem('doctorId');

  const fetchNotes = () => {
    axios.get(`http://127.0.0.1:8000/api/notes/doctor/${doctorId}`)
      .then(res => setNotes(res.data))
      .catch(err => console.error("Erreur lors du chargement des notes :", err));
  };

  useEffect(() => {
    fetchNotes();
  });

  const handleSave = () => {
    if (!note.trim()) return;

    axios.post('http://127.0.0.1:8000/api/notes', {
      doctor_id: parseInt(doctorId),
      content: note
    })
    .then(() => {
      setNote('');
      fetchNotes(); // Recharger la liste
    })
    .catch(err => {
      console.error("Erreur sauvegarde :", err.response?.data || err.message);
      alert("Erreur lors de la sauvegarde.");
    });
  };

  return (
    <div className="container mb-3">
      <h2 className="mb-4">📝 Bloc-Notes du Médecin</h2>

      <div className=" p-1 shadow-sm">
        <textarea
          className="form-control mb-2"
          rows="4"
          placeholder="Écrivez votre note ici..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSave}>
          Ajouter la Note
        </button>
      </div>

      <div className="mt-4">
        <h5>🗂️ Vos Notes :</h5>
        {notes.length > 0 ? (
          <ul className="list-group">
            {notes.map(n => (
              <li key={n.id} className="list-group-item">
                📝 {n.content}
                <br />
                <small className="text-muted">{new Date(n.created_at).toLocaleString()}</small>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted">Aucune note enregistrée.</p>
        )}
      </div>
    </div>
  );
};

export default BlocNotes;
