import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import Layout from "@/components/Layout";
import patrikPhoto from "@/assets/patrik-petigat.jpg";
import logoDrivexperience from "@/assets/logo-drivexperience.jpeg";

const Istruttori = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="page-header">
        <div className="section-container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Istruttori</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            Professionisti qualificati con esperienza nella formazione 
            alla guida sicura.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            {/* Important Notice */}
            <div className="p-6 bg-secondary rounded-lg mb-12">
              <p className="text-foreground leading-relaxed">
                I corsi di Guida Sicura VDA sono erogati da istruttori di guida 
                sicura che operano come liberi professionisti, in collaborazione.
              </p>
            </div>

            {/* Instructors */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Gli istruttori
              </h2>
              
              {/* Patrik Petigat */}
              <div className="card-professional">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <img 
                      src={patrikPhoto} 
                      alt="Patrik Petigat" 
                      className="w-28 h-28 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Patrik Petigat
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Istruttore di guida S.S.O.T. (Sicura, Sportiva ed Operativa in emergenza – Test Driver)
                    </p>
                    <div className="space-y-2 text-sm text-foreground/80">
                      <p>Istruttore di guida con esperienza nelle autoscuole e nella formazione alla guida sicura, sportiva e operativa in emergenza.</p>
                      <p>Opera come caposquadra autista presso il Traforo del Monte Bianco in ambito antincendio.</p>
                      <p>Collabora alla formazione di operatori e conducenti professionali con un approccio pratico e orientato alla sicurezza.</p>
                    </div>
                    
                    {/* Personal Project Logo */}
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-xs text-muted-foreground mb-2">Progetto personale</p>
                      <img 
                        src={logoDrivexperience} 
                        alt="DriveXperience" 
                        className="h-16 w-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Orlarei Edy */}
              <div className="card-professional">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-secondary rounded-lg flex items-center justify-center">
                      <User className="h-12 w-12 text-muted-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Orlarei Edy
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Istruttore di guida sicura e sportiva
                    </p>
                    <div className="space-y-2 text-sm text-foreground/80">
                      <p>Istruttore di guida sicura con attività legata alla gestione del veicolo in situazioni di emergenza.</p>
                      <p>Caposquadra autista presso il Traforo del Monte Bianco, con attività di guida in emergenza in ambito antincendio.</p>
                      <p>Svolge formazione orientata alla prevenzione del rischio e alla guida consapevole in ambito professionale.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Vuoi conoscere meglio il nostro team?
              </p>
              <Button variant="default" size="lg" asChild>
                <Link to="/contatti">Contattaci</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Istruttori;
