module.exports = (sequelize, Sequelize) => {
    const Hemisphere = sequelize.define(
        'Hemisphere',
        {
            southern: {
                type: Sequelize.DataTypes.BOOLEAN,
                allowNull: false
            },
            northern: {
                type: Sequelize.DataTypes.BOOLEAN,
                allowNull: false

            }

        },
        {
            timestamps: false,
        }
    )
    // SET UP ASSOCIATION

    return Hemisphere
}