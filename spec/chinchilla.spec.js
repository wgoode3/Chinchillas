describe("Chinchilla Model", () => {
    
    // startup goes here

    require("../server.js");
    const mongoose = require("mongoose");
    
    // tests go here

    it("should exist", () => {
        mongoose.model("Chinchilla");
        expect(true).toBe(true);
    });

    it("should have a name", () => {
        let Chinchilla = mongoose.model("Chinchilla");
        let c = new Chinchilla({color: "red", age: 12});
        c.save(err => {
            if(err) {
                expect(true).toBe(true);
            } else {
                expect(true).toBe(false);
            }
        })
    });

    it("should have a color", () => {
        let Chinchilla = mongoose.model("Chinchilla");
        let c = new Chinchilla({name: "Bob", age: 12});
        c.save(err => {
            if(err) {
                expect(true).toBe(true);
            } else {
                expect(true).toBe(false);
            }
        })
    });

    it("should have an age", () => {
        let Chinchilla = mongoose.model("Chinchilla");
        let c = new Chinchilla({name: "Bob", color: "red"});
        c.save(err => {
            if(err) {
                expect(true).toBe(true);
            } else {
                expect(true).toBe(false);
            }
        })
    });

});