import React from 'react';
import WindowsWindow from '../../../components/Layout/WindowsWindow';
import { Server } from 'lucide-react';
import './HAProxyPage.css';

const HAProxyPage = () => {
  return (
    <WindowsWindow title="HAProxy: Installation">
      <div className="max-w-4xl mx-auto p-8 space-y-8 haproxy-content">
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
          <img src="/images/haproxy/image.png" alt="Clonage GLPI" className="rounded-lg shadow-md" />
        </section>

        <hr className="my-8 border-gray-200" />

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Création d'une nouvelle machine HAProxy</h2>
          <p className="text-gray-600 mb-4">
            On va maintenant créer une machine "HAProxy" qui va permettre de faire fonctionner les deux machines via une seule adresse IP.
          </p>
          <img src="/images/haproxy/image1.png" alt="Création HAProxy" className="rounded-lg shadow-md" />
        </section>

        <hr className="my-8 border-gray-200" />

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Configuration "matérielle" de la machine</h2>
          <p className="text-gray-600 mb-4">
            Maintenant que la machine a été créée, on va appliquer une certaine configuration matérielle que voici :
          </p>
          <img src="/images/haproxy/image2.png" alt="Configuration matérielle" className="rounded-lg shadow-md" />
        </section>

        <hr className="my-8 border-gray-200" />

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. L'installation de HAProxy</h2>
          <p className="text-gray-600 mb-4">
            La machine est désormais prête. Nous allons maintenant installer <code>apache2</code> ainsi 
            que <code>haproxy</code> au sein de la machine. Pour cela, on va tout simplement réaliser deux commandes :
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li><code>apt -y install apache2</code></li>
            <li><code>apt -y install haproxy</code></li>
          </ul>
          <img src="/images/haproxy/image3.png" alt="Installation HAProxy" className="mt-4 rounded-lg shadow-md" />
        </section>

        <hr className="my-8 border-gray-200" />

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Modification du fichier "hosts"</h2>
          <p className="text-gray-600 mb-4">
            Tout est installé. En premier lieu, nous allons simplement rajouter nos deux serveurs GLPI au 
            fichier hosts afin de les faire reconnaître par notre serveur proxy.
          </p>
          <img src="/images/haproxy/image4.png" alt="Modification hosts" className="rounded-lg shadow-md" />
        </section>

        <hr className="my-8 border-gray-200" />

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Modification du fichier de configuration</h2>
          <p className="text-gray-600 mb-4">
            Le fichier hosts reconnaît maintenant nos deux serveurs web. Nous allons maintenant modifier notre 
            fichier de configuration avec la commande nano <code>/etc/haproxy/haproxy.cfg</code> pour modifier le fichier.
          </p>
          <img src="/images/haproxy/image5.png" alt="Configuration HAProxy" className="rounded-lg shadow-md" />
        </section>

        <hr className="my-8 border-gray-200" />

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Mise en place de la page de stats</h2>
          <p className="text-gray-600 mb-4">
            Enfin, on créé l'URI de la page de statistiques afin de pouvoir se rendre sur la page, 
            et ainsi détecter les pannes de nos serveurs.
          </p>
          <img src="/images/haproxy/image6.png" alt="Page de stats" className="rounded-lg shadow-md" />
        </section>

        <hr className="my-8 border-gray-200" />

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Fin</h2>
          <p className="text-gray-600 mb-4">
            On finit donc par avoir cette page en rentrant l'URL{' '}
            <code>https://10.63.14.9/haproxyStats</code> ce qui prouve que tout est bien fonctionnel.
          </p>
          <img src="/images/haproxy/image7.png" alt="Page finale" className="rounded-lg shadow-md" />
        </section>
      </div>
    </WindowsWindow>
  );
};

export default HAProxyPage; 