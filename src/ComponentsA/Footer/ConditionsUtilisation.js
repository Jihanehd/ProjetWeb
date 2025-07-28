import React from 'react';
import './ConditionsUtilisation.css'; // Tu peux créer un CSS si besoin

const ConditionsUtilisation = () => {
  return (
    <div className="conditions-container" style={{ padding: '2rem', maxWidth: '900px', margin: 'auto' }}>
      <h1>Conditions d'utilisation</h1>
      <p>Bienvenue sur le site officiel de l'Hôpital XYZ. En utilisant ce site, vous acceptez pleinement et sans réserve les présentes conditions. Si vous êtes en désaccord, veuillez ne pas utiliser ce site.</p>

      <h2>1. Accès au site</h2>
      <p>Le site est accessible à tout moment, sauf interruption pour maintenance ou cas de force majeure. Certaines fonctionnalités, comme la prise de rendez-vous, nécessitent la saisie d'informations personnelles.</p>

      <h2>2. Utilisation autorisée</h2>
      <p>L'utilisateur s'engage à utiliser ce site uniquement à des fins légitimes : consulter les informations, prendre rendez-vous, ou contacter un professionnel de santé.</p>

      <h2>3. Comportements interdits</h2>
      <ul>
        <li>Fournir de fausses informations ou usurper une identité</li>
        <li>Faire des réservations non sérieuses ou abusives</li>
        <li>Modifier, pirater ou perturber le bon fonctionnement du site</li>
        <li>Publier du contenu diffamatoire ou illicite</li>
      </ul>

      <h2>4. Responsabilités</h2>
      <p>L'hôpital met tout en œuvre pour assurer l'exactitude des informations affichées, mais ne peut garantir l'absence d'erreurs. L'utilisateur est responsable de l’usage qu’il fait des données disponibles sur le site.</p>

      <h2>5. Données personnelles</h2>
      <p>Les données collectées (nom, email, téléphone, date de rendez-vous...) sont utilisées uniquement pour la gestion de vos demandes. Pour plus de détails, consultez notre <a href="/politique-confidentialite">Politique de confidentialité</a>.</p>

      <h2>6. Propriété intellectuelle</h2>
      <p>Tous les contenus présents sur ce site (textes, images, logos, etc.) sont la propriété exclusive de l’hôpital, sauf mention contraire. Toute reproduction est interdite sans autorisation écrite préalable.</p>

      <h2>7. Modification des conditions</h2>
      <p>L’Hôpital XYZ se réserve le droit de modifier ces conditions à tout moment. Les utilisateurs sont invités à les consulter régulièrement.</p>

      <h2>8. Droit applicable</h2>
      <p>Ces conditions sont régies par la loi marocaine. En cas de litige, les tribunaux de Casablanca sont compétents.</p>

      <h2>9. Contact</h2>
      <p>Pour toute question concernant ces conditions, vous pouvez nous contacter à : <a href="mailto:contact@hopital.com">contact@hopital.com</a></p>
    </div>
  );
};

export default ConditionsUtilisation;
