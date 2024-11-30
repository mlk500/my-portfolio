export interface FigmaEmbed {
    projectId: string;
    figmaEmbedCode: string;
}

export const figmaEmbeds = new Map<string, string>([
    ['Kids Watch', '<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450"\
         src="https://embed.figma.com/proto/nWAufWRu4jNoLreD7qsOQ1/Kids-Watcch---HCI-Project?node-id=336-1129&node-type=canvas&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=291%3A886&embed-host=share"\
          allowfullscreen></iframe>'],
    ['Player UI - Project',  '<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/proto/FzK1X6tGvlFHaI9Ndb4KEC/Final-Project---Player-UI?node-id=1-25638&node-type=canvas&scaling=min-zoom&content-scaling=fixed&page-id=1%3A23538&starting-point-node-id=1%3A38954&embed-host=share" allowfullscreen></iframe>'],
    ['Knight\'s move', '<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/proto/EzLXFFjPbTqsHGpMs54Izv/Knight\'s-move?node-id=2-5&node-type=canvas&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A5&show-proto-sidebar=1&embed-host=share" allowfullscreen></iframe>']
]);