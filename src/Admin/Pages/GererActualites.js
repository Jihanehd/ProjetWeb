import React, { useEffect, useState } from "react";
import axios from "axios";

const GererActualites = () => {
  const [actualites, setActualites] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    titre: "",
    categorie: "",
    date: "",
    contenu: "",
    image: null,
  });

  useEffect(() => {
    fetchActualites();
  }, []);

  const fetchActualites = () => {
    axios.get("http://127.0.0.1:8000/api/actualites").then((res) => {
      setActualites(res.data);
    });
  };

  const handleDelete = (id) => {
    if (window.confirm("Voulez-vous supprimer cette actualité ?")) {
      axios.delete(`http://127.0.0.1:8000/api/actualites/${id}`).then(() => {
        fetchActualites();
      });
    }
  };

  const handleEdit = (actu) => {
    setEditingId(actu.id);
    setForm({
      titre: actu.titre,
      categorie: actu.categorie,
      date: actu.date,
      contenu: actu.contenu,
      image: null,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("titre", form.titre);
    formData.append("categorie", form.categorie);
    formData.append("date", form.date);
    formData.append("contenu", form.contenu);
    if (form.image) {
      formData.append("image", form.image);
    }

    const url = editingId
      ? `http://127.0.0.1:8000/api/actualites/${editingId}`
      : "http://127.0.0.1:8000/api/actualites";

    const method = editingId ? "post" : "post"; // Laravel accepte PUT via POST si méthode spoofée

    axios({
      method,
      url,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then(() => {
      fetchActualites();
      setForm({ titre: "", categorie: "", date: "", contenu: "", image: null });
      setEditingId(null);
    });
  };

  return (
    <div className="container">
      <h2 className="mb-4">Gérer les Actualités 📰</h2>

      <h4>{editingId ? "Modifier une Actualité" : "Ajouter une Actualité"}</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Titre"
          value={form.titre}
          onChange={(e) => setForm({ ...form, titre: e.target.value })}
          required
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Catégorie"
          value={form.categorie}
          onChange={(e) => setForm({ ...form, categorie: e.target.value })}
          required
        />
        <input
          type="date"
          className="form-control mb-2"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          required
        />
        <textarea
          className="form-control mb-2"
          placeholder="Contenu"
          value={form.contenu}
          onChange={(e) => setForm({ ...form, contenu: e.target.value })}
          required
        />
        <input
          type="file"
          className="form-control mb-2"
          onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
        />
        <button className="btn btn-success" type="submit">
          {editingId ? "Sauvegarder" : "Ajouter"}
        </button>
      </form>
      
      <h2 className="mb-4">La liste des actualités </h2>
      <table className="table">
        <thead>
          <tr>
            <th>Titre</th>
            <th>Catégorie</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {actualites.map((actu) => (
            <tr key={actu.id}>
              <td>{actu.titre}</td>
              <td>{actu.categorie}</td>
              <td>{actu.date}</td>
              <td>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => handleEdit(actu)}
                >
                  Modifier
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(actu.id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      
    </div>
  );
};

export default GererActualites;
