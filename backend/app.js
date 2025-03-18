const swaggerUi = require('swagger-ui-express');
const express = require('express');
const app = express();
const port = 5432;
const path = require('path');
const fs = require('fs');
const sequelize = require('./config/database');
const Subjects = require('./models/Subjects.js');

// Charger la spécification Swagger
const swaggerDoc = JSON.parse(fs.readFileSync(path.join(__dirname, 'swagger.json'), 'utf-8'));

// Servir l'interface Swagger
app.use('/swagger-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// Recevoir des objets JSON
app.use(express.json());

// Vérifier si le serveur fonctionne
app.get('/', (req, res) => {
    res.send("Server is alive")
});

// Obtenir tous les sujets
app.get('/subjects', async (req, res) => {
    const subjects = await Subjects.findAll();
    res.send(JSON.stringify(subjects));
});

// Obtenir un sujet par son ID
app.get('/subject', async (req, res) => {
    const id = req.query.id;
    const subject = await Subjects.findByPk(id);
    res.send(JSON.stringify(subject));
});

// Ajouter un nouveau sujet
app.post('/subject', async (req, res) => {
    const { subjectName, moduleName, assignmentDue, upcomingExam, finalProject } = req.body;
    const query = await Subjects.create({
        subjectName: subjectName,
        moduleName: moduleName,
        assignmentDue: assignmentDue,
        upcomingExam: upcomingExam,
        finalProject: finalProject
    });
    res.send(JSON.stringify(query));
});

// Mettre à jour un sujet existant
app.put('/subject', async (req, res) => {
    const { id, column, value } = req.body;
    const query = await Subjects.update(
        { [column]: value },
        {
            where: {
                id: id
            },
        }
    );
    res.send(query);
});

// Supprimer un sujet existant
app.delete('/subject', async (req, res) => {
    const { id } = req.body;
    const query = Subjects.destroy({ where: { id: id } });
    res.send(query);
});

app.listen(port, () => {
    console.log(`Server running at: http://localhost:${port}`);
});
