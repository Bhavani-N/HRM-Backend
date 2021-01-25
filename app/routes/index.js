const staffRoutes = require('./staff/staff');
const taskRoutes = require('./task/task');
const projectRoutes = require('./project/project');

module.exports = app => {
    app.use('/api/v1/staffs', staffRoutes);
    app.use('/api/v1/tasks', taskRoutes);
    app.use('/api/v1/projects', projectRoutes);
}