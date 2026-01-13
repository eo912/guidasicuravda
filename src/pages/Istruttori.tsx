import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import Layout from "@/components/Layout";

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
                I corsi di Guida Sicura BDA sono erogati da istruttori di guida 
                sicura che operano come liberi professionisti, in collaborazione.
              </p>
            </div>

            {/* Instructors Placeholder */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Gli istruttori
              </h2>
              
              {/* Instructor Card Template - to be filled */}
              <div className="card-professional">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-secondary rounded-lg flex items-center justify-center">
                      <User className="h-12 w-12 text-muted-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      [Nome Istruttore]
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      [Qualifica professionale]
                    </p>
                    <p className="text-sm text-muted-foreground">
                      [Breve descrizione dell'esperienza e delle competenze]
                    </p>
                    {/* Spazio per eventuale logo personale */}
                  </div>
                </div>
              </div>

              <div className="card-professional">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-secondary rounded-lg flex items-center justify-center">
                      <User className="h-12 w-12 text-muted-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      [Nome Istruttore]
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      [Qualifica professionale]
                    </p>
                    <p className="text-sm text-muted-foreground">
                      [Breve descrizione dell'esperienza e delle competenze]
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="mt-12 p-6 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                Questa sezione verrà completata con i profili degli istruttori 
                collaboratori. Ogni istruttore potrà inserire il proprio logo 
                personale in questa pagina.
              </p>
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
