import { Cat } from "./models/cat";

export const resolvers = {
    Query: {
        hello: () => "hi there",
        cats: () => Cat.find()
    },
    Mutation: {
        createCat: async (_, {name}) => {
            const kitty = new Cat({name});
            await kitty.save();
            console.log(kitty)
            return kitty;
        },
        deleteCat: async (_, {name}) => {
            let deletedCat = await Cat.findOneAndDelete({name});
            return deletedCat;
        }
    }
};
