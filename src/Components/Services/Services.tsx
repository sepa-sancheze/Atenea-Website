import ServerIcon from "../Icons/ServerIcon";
import ShieldIcon from "../Icons/ShieldIcon";
import CloudUploadIcon from "../Icons/CloudUploadIcon";

function Services() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <ServerIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">IT Infrastructure</h3>
              <p className="text-muted-foreground">
                Optimize your IT infrastructure for maximum efficiency and
                reliability.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <ShieldIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Cybersecurity</h3>
              <p className="text-muted-foreground">
                Protect your business from cyber threats with our advanced
                security solutions.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <CloudUploadIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Cloud Services</h3>
              <p className="text-muted-foreground">
                Leverage the power of the cloud to drive your business forward.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
