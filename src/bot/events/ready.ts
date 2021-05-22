import Event from "../struct/Event";

abstract class ReadyEvent extends Event {
  constructor() {
    super({
      name: "ready",
      once: true,
    });
  }

  async exec() {
    this.client.user!.setActivity("out for kids who I can punish", {
      type: "WATCHING",
    });

    setInterval(() => {
      this.client.user!.setActivity("out for kids who I can punish", {
        type: "WATCHING",
      });
    }, 3600000);

    console.log("Ready!");
  }
}

export default ReadyEvent;
