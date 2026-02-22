import type { Snippet } from "svelte";



export namespace CoachesCard {

    export interface props {
        children?: Snippet,
        link: string,
    }
}

export namespace CoachInfo {

    export interface props {
        children?: Snippet,
    }

    export interface info {
        name: string
        path: string
        imgPath: string
        description: string
    }

    export let information: info[]  = [
    {
        name: "Dustin Meyer",
        path: "/Coaches/Dustin-Meyer",
        imgPath: "./src/lib/assets/images.jpg",
        description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus, elit at vulputate euismod, lorem sapien fermentum nulla, ac mollis ligula erat sit amet sem. Aliquam at eros quis enim elementum rhoncus. Praesent mattis lectus mattis lorem imperdiet pellentesque. Nunc vitae magna neque. Pellentesque facilisis faucibus ex nec sagittis. Mauris lobortis velit quis nibh scelerisque, vitae rhoncus mi consequat. Sed dapibus, nibh vel sagittis pretium, ipsum ex aliquam lorem, id eleifend neque urna non purus. Mauris egestas sem eu scelerisque eleifend. Etiam ultricies, orci vel condimentum accumsan, sapien odio convallis odio, quis sagittis lectus erat ac ante. Curabitur quis imperdiet purus. Nunc luctus molestie nisl in tincidunt. Nunc ac arcu a diam eleifend mattis sit amet id eros. In quis volutpat nibh, nec posuere elit. Proin sit amet bibendum libero, at auctor diam. Curabitur in condimentum nisl.\
Nunc et laoreet turpis. Vivamus pellentesque, sem vel varius tempor, ligula risus commodo augue, eget vehicula mi justo in lacus. In interdum non urna sollicitudin posuere. Duis hendrerit justo ante, et malesuada lacus condimentum eu. Quisque et orci in lacus vulputate sodales condimentum non enim. Donec quis neque eu lacus cursus molestie vel in quam. Sed volutpat hendrerit sapien consectetur interdum. Vestibulum at semper metus, sed molestie velit. Aenean euismod volutpat consectetur.
Nulla sed feugiat justo, id euismod odio. Donec efficitur ornare arcu ac commodo. Etiam a orci justo. Nullam varius a neque bibendum fermentum. Curabitur arcu ex, molestie sed arcu sit amet, eleifend suscipit urna. Cras feugiat neque ac nisl aliquam lacinia. Mauris dapibus tortor et mi eleifend interdum. Nullam a diam nec odio rhoncus rutrum. Etiam malesuada risus nec feugiat vestibulum. Proin augue leo, dapibus nec ultrices eu, egestas vitae eros. `,
    },
    {
        name: "Alex Curran",
        path: "/Coaches/Alex-Curran",
        imgPath: "./src/lib/assets/images.jpg",
        description: "He is the best coach"
    },
    {
        name: "Erica Ellis",
        path: "/Coaches/Erica-Ellis",
        imgPath: "./src/lib/assets/images.jpg",
        description: "He is the best coach"
    },
    {
        name: "Dan Renolds",
        path: "/Coaches/Dan-Renolds",
        imgPath: "./src/lib/assets/images.jpg",
        description: "He is the best coach"
    },
    {
        name: "Nick Jones",
        path: "/Coaches/Nick-Jones",
        imgPath: "./src/lib/assets/images.jpg",
        description: "He is the best coach"
    }
    ]

}