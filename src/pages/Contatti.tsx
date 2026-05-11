import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

const Contatti = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefono: "",
    azienda: "",
    messaggio: "",
  });
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Messaggio inviato",
      description: "Grazie per averci contattato. Risponderemo al più presto.",
    });
    
    setFormData({
      nome: "",
      email: "",
      telefono: "",
      azienda: "",
      messaggio: "",
    });
    setPrivacyConsent(false);
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="page-header">
        <div className="section-container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contatti</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            Richiedi informazioni sui nostri corsi o fissa un incontro 
            conoscitivo per valutare insieme le tue esigenze formative.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Come contattarci
              </h2>
              <p className="text-muted-foreground mb-8">
                Per ricevere informazioni sui corsi, richiedere un preventivo 
                o fissare un incontro conoscitivo, puoi contattarci attraverso 
                i seguenti canali o compilando il modulo a fianco.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                     <p className="text-muted-foreground text-sm mb-1">
                       Per informazioni sui corsi e sulle modalità di erogazione:
                     </p>
                     <p className="text-muted-foreground text-xs mt-2">
                       Per informazioni sui percorsi formativi e sulle modalità di erogazione:
                     </p>
                    <a 
                      href="mailto:info@guidasicuravda.it" 
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      info@guidasicuravda.it
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Area operativa</h3>
                    <p className="text-muted-foreground">
                      I corsi vengono erogati su tutto il territorio nazionale, 
                      presso strutture convenzionate o presso sedi concordate.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-secondary rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">
                  Richiesta di informazioni
                </h3>
                <p className="text-muted-foreground text-sm">
                  Se desideri ricevere informazioni dettagliate su un corso specifico, 
                  un preventivo per la formazione aziendale o valutare l'inserimento 
                  dei corsi nel tuo catalogo formativo, non esitare a contattarci. 
                  Risponderemo entro 48 ore lavorative.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="card-professional">
                <h2 className="text-xl font-bold text-foreground mb-6">
                  Invia un messaggio
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome e cognome *</Label>
                      <Input
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                        placeholder="Mario Rossi"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="mario.rossi@email.it"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="telefono">Telefono</Label>
                      <Input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="+39 000 000 0000"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="azienda">Ente/Organizzazione</Label>
                      <Input
                        id="azienda"
                        name="azienda"
                        value={formData.azienda}
                        onChange={handleChange}
                        placeholder="Nome ente o organizzazione"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="messaggio">Messaggio *</Label>
                    <Textarea
                      id="messaggio"
                      name="messaggio"
                      value={formData.messaggio}
                      onChange={handleChange}
                      required
                      placeholder="Descrivi le tue esigenze formative o le informazioni di cui hai bisogno..."
                      rows={5}
                    />
                  </div>

                  {/* Privacy Consent */}
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="privacy"
                      checked={privacyConsent}
                      onCheckedChange={(checked) => setPrivacyConsent(checked === true)}
                      className="mt-0.5"
                    />
                    <Label htmlFor="privacy" className="text-sm text-muted-foreground font-normal leading-relaxed cursor-pointer">
                      Ho letto e accetto l'
                      <Link to="/privacy-policy" className="text-primary hover:underline" target="_blank">
                        informativa sulla privacy
                      </Link>
                      {" "}e acconsento al trattamento dei miei dati personali per rispondere alla mia richiesta. *
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    variant="default" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting || !privacyConsent}
                  >
                    {isSubmitting ? (
                      "Invio in corso..."
                    ) : (
                      <>
                        Invia messaggio
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    I campi contrassegnati con * sono obbligatori
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contatti;
