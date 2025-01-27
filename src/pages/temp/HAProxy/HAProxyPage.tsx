import React from 'react';
import WindowsWindow from '../../../components/Layout/WindowsWindow';
import { Server } from 'lucide-react';

const HAProxyPage = () => {
  return (
    <WindowsWindow title="HAProxy: Installation">
      <div className="max-w-4xl mx-auto p-8 space-y-8">
        <div className="flex items-center gap-4 mb-8">
          <Server className="w-12 h-12 text-[#245EDC]" />
          <h1 className="text-3xl font-bold">HAProxy: Installation</h1>
        </div>

        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Clonage de la machine GLPI</h2>
          <p className="text-gray-600 mb-4">
            En premier, on va cloner la machine GLPI afin de pouvoir mettre en place le système de proxy. 
            Pour cela, on va choisir l'option "full clone" afin de rendre les deux machines indépendantes l'une de l'autre.
          </p>
          <img src="/src/pages/temp/HAProxy/image.png" alt="Clonage GLPI" className="rounded-lg shadow-md" />
        </section>

        <hr className="my-8 border-gray-200" />

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Création d'une nouvelle machine HAProxy</h2>
          <p className="text-gray-600 mb-4">
            On va maintenant créer une machine "HAProxy" qui va permettre de faire fonctionner les deux machines via une seule adresse IP.
          </p>
          <img src="/src/pages/temp/HAProxy/image 1.png" alt="Création HAProxy" className="rounded-lg shadow-md" />
        </section>

        {/* Continuer avec les autres sections de la même manière */}
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Fin</h2>
          <p className="text-gray-600 mb-4">
            On finit donc par avoir cette page en rentrant l'URL <code>https://10.63.14.9/haproxyStats</code> ce qui prouve que tout est bien fonctionnel.
          </p>
          <img src="/src/pages/temp/HAProxy/image 7.png" alt="Page finale" className="rounded-lg shadow-md" />
        </section>
      </div>
    </WindowsWindow>
  );
};

export default HAProxyPage; 