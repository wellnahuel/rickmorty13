export const Routes = {
    HOME: {
        path: "/",
        name: "Home",
    },
    CHARACTERS: {
        path: "/characters",
        name: "Characters",
    },
    LOCATIONS: {
        path: "/locations",
        name: "Locations",
    },
}

export interface Route {
    path: string;
    name: string;
}