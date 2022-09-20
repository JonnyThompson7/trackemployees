INSERT INTO departments (name)
VALUES
    ('Management'),
    ('Sales'),
    ('Customer Service'),
    ('Software Development'),
    ('Marketing');

INSERT INTO roles (title, salary, department)
VALUES
    ('Lead Manager', 120000, 1),
    ('Vice Manager', 100000, 1),
    ('Associate Manager', 85000, 1),
    ('Salesperson', 85000, 2),
    ('Secretary', 55000, 2),
    ('Quality Assurance Representative', 65000, 3),
    ('Customer Service Representative', 65000, 3),
    ('Lead Developer', 175000, 4),
    ('Senior Developer', 125000, 4),
    ('Developer', 60000, 4),
    ('Lead Graphic Designer', 75000, 5),
    ('Field Marketer', 65000, 5),
    ('Data Analyst', 75000, 5);

INSERT INTO employees (first_name, last_name, role, manager_id)
VALUES 
    ('Jonny', 'Thompson', 1, 1),
    ('Chloe', 'Pflum', 2, 1), 
    ('Cy', 'Howard', 3, 2), 
    ('Ken', 'Clark', 3, 3),
    ('Dylan', 'Davies', 4, 1), 
    ('Jonathan', 'Sandin', 5, 4), 
    ('Dillion', 'Thomas', 6, 2), 
    ('Cody', 'Monke', 7, 2),
    ('Dillon', 'Scabeater', 8, 1),
    ('Rias', 'Gremory', 9, 1),
    ('Albedo', 'Overlord', 10, 3),
    ('Amelie', 'Azazel', 11, 2),
    ('Tanjiro', 'Kamado', 12, 3),
    ('Kalego', 'Sensei', 13, 2),
    ('Revy', 'Lagoon', 4, 1),
    ('Ais', 'Wallenstein', 4, 1),
    ('Yukino', 'Yukinoshita', 7, 4),
    ('Yumeko', 'Jabami', 12, 3);