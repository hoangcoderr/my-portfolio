/*
 Navicat Premium Dump SQL

 Source Server         : mýql
 Source Server Type    : MySQL
 Source Server Version : 100432 (10.4.32-MariaDB)
 Source Host           : localhost:3306
 Source Schema         : portfolio_db

 Target Server Type    : MySQL
 Target Server Version : 100432 (10.4.32-MariaDB)
 File Encoding         : 65001

 Date: 13/04/2025 22:21:03
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for achievements
-- ----------------------------
DROP TABLE IF EXISTS `achievements`;
CREATE TABLE `achievements`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `organization` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `icon` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `icon_color` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `bg_color` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of achievements
-- ----------------------------
INSERT INTO `achievements` VALUES (1, 'Best Innovation Award', 'TechConf 2023', 'Received the Best Innovation Award for developing a groundbreaking AI-driven recommendation system that improved user engagement by 35%.', 'ri-award-line', 'text-primary-600 dark:text-primary-400', 'bg-primary-100 dark:bg-primary-900/30', '2025-04-09 12:46:38', '2025-04-09 12:46:38');
INSERT INTO `achievements` VALUES (2, 'Open Source Contributor', 'Major Framework Project', 'Active contributor to a major open-source framework with over 10 accepted pull requests and recognition as a valuable community member.', 'ri-medal-line', 'text-secondary-600 dark:text-secondary-400', 'bg-secondary-100 dark:bg-secondary-900/30', '2025-04-09 12:46:38', '2025-04-09 12:46:38');
INSERT INTO `achievements` VALUES (3, 'Best Innovation Award', 'TechConf 2023', 'Received the Best Innovation Award for developing a groundbreaking AI-driven recommendation system that improved user engagement by 35%.', 'ri-award-line', 'text-primary-600 dark:text-primary-400', 'bg-primary-100 dark:bg-primary-900/30', '2025-04-09 12:46:38', '2025-04-09 12:46:38');
INSERT INTO `achievements` VALUES (4, 'Open Source Contributor', 'Major Framework Project', 'Active contributor to a major open-source framework with over 10 accepted pull requests and recognition as a valuable community member.', 'ri-medal-line', 'text-secondary-600 dark:text-secondary-400', 'bg-secondary-100 dark:bg-secondary-900/30', '2025-04-09 12:46:38', '2025-04-09 12:46:38');

-- ----------------------------
-- Table structure for contact_messages
-- ----------------------------
DROP TABLE IF EXISTS `contact_messages`;
CREATE TABLE `contact_messages`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `subject` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `message` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `is_read` tinyint(1) NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of contact_messages
-- ----------------------------

-- ----------------------------
-- Table structure for experiences
-- ----------------------------
DROP TABLE IF EXISTS `experiences`;
CREATE TABLE `experiences`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `role` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `company` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `period` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `responsibilities` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `badge_color` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of experiences
-- ----------------------------
INSERT INTO `experiences` VALUES (1, 'Senior Full Stack Developer', 'Tech Innovations Inc.', '2021 - Present', 'Led a team of developers in building scalable web applications for enterprise clients. Implemented microservices architecture that improved system performance by 40%.', '[\"Developed and maintained multiple React-based frontend applications\", \"Designed RESTful APIs and GraphQL endpoints for various services\", \"Implemented CI/CD pipelines to improve development workflow\", \"Mentored junior developers and conducted code reviews\"]', 'bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300', '2025-04-09 12:46:38', '2025-04-09 12:46:38');
INSERT INTO `experiences` VALUES (2, 'Frontend Developer', 'Digital Solutions LLC', '2018 - 2021', 'Worked on developing responsive user interfaces for various web applications. Collaborated with designers and backend developers to implement new features.', '[\"Built interactive UI components using React and Redux\", \"Optimized application performance and loading speeds\", \"Implemented responsive designs for mobile and desktop\", \"Integrated third-party APIs and services\"]', 'bg-secondary-100 dark:bg-secondary-900/30 text-secondary-800 dark:text-secondary-300', '2025-04-09 12:46:38', '2025-04-09 12:46:38');
INSERT INTO `experiences` VALUES (3, 'Senior Full Stack Developer', 'Tech Innovations Inc.', '2021 - Present', 'Led a team of developers in building scalable web applications for enterprise clients. Implemented microservices architecture that improved system performance by 40%.', '[\"Developed and maintained multiple React-based frontend applications\", \"Designed RESTful APIs and GraphQL endpoints for various services\", \"Implemented CI/CD pipelines to improve development workflow\", \"Mentored junior developers and conducted code reviews\"]', 'bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300', '2025-04-09 12:46:38', '2025-04-09 12:46:38');
INSERT INTO `experiences` VALUES (4, 'Frontend Developer', 'Digital Solutions LLC', '2018 - 2021', 'Worked on developing responsive user interfaces for various web applications. Collaborated with designers and backend developers to implement new features.', '[\"Built interactive UI components using React and Redux\", \"Optimized application performance and loading speeds\", \"Implemented responsive designs for mobile and desktop\", \"Integrated third-party APIs and services\"]', 'bg-secondary-100 dark:bg-secondary-900/30 text-secondary-800 dark:text-secondary-300', '2025-04-09 12:46:38', '2025-04-09 12:46:38');

-- ----------------------------
-- Table structure for projects
-- ----------------------------
DROP TABLE IF EXISTS `projects`;
CREATE TABLE `projects`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `type` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `thumbnail_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `technologies` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `github_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `demo_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of projects
-- ----------------------------
INSERT INTO `projects` VALUES (1, 'E-Commerce Platform', 'Full Stack Application', 'A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment processing.', 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', '[\"React\", \"Node.js\", \"MongoDB\", \"Stripe\"]', 'https://github.com', 'https://demo.com', '2025-04-09 12:46:38', '2025-04-09 12:46:38');
INSERT INTO `projects` VALUES (2, 'Task Management App', 'Frontend Application', 'A modern task management application with features like drag-and-drop task organization, categories, priority levels, and deadline notifications.', 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', '[\"React\", \"Redux\", \"Tailwind CSS\", \"Firebase\"]', 'https://github.com', NULL, '2025-04-09 12:46:38', '2025-04-09 12:46:38');
INSERT INTO `projects` VALUES (3, 'E-Commerce Platform', 'Full Stack Application', 'A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment processing.', 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', '[\"React\", \"Node.js\", \"MongoDB\", \"Stripe\"]', 'https://github.com', 'https://demo.com', '2025-04-09 12:46:38', '2025-04-09 12:46:38');
INSERT INTO `projects` VALUES (4, 'Task Management App', 'Frontend Application', 'A modern task management application with features like drag-and-drop task organization, categories, priority levels, and deadline notifications.', 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', '[\"React\", \"Redux\", \"Tailwind CSS\", \"Firebase\"]', 'https://github.com', NULL, '2025-04-09 12:46:38', '2025-04-09 12:46:38');

-- ----------------------------
-- Table structure for skill_categories
-- ----------------------------
DROP TABLE IF EXISTS `skill_categories`;
CREATE TABLE `skill_categories`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `icon` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of skill_categories
-- ----------------------------
INSERT INTO `skill_categories` VALUES (1, 'Frontend Development', 'ri-code-s-slash-line', '2025-04-09 12:46:38', '2025-04-09 12:46:38');
INSERT INTO `skill_categories` VALUES (2, 'Backend Development', 'ri-server-line', '2025-04-09 12:46:38', '2025-04-09 12:46:38');
INSERT INTO `skill_categories` VALUES (3, 'DevOps & Tools', 'ri-tools-line', '2025-04-09 12:46:38', '2025-04-09 12:46:38');
INSERT INTO `skill_categories` VALUES (4, 'Frontend Development', 'ri-code-s-slash-line', '2025-04-09 12:46:38', '2025-04-09 12:46:38');
INSERT INTO `skill_categories` VALUES (5, 'Backend Development', 'ri-server-line', '2025-04-09 12:46:38', '2025-04-09 12:46:38');
INSERT INTO `skill_categories` VALUES (6, 'DevOps & Tools', 'ri-tools-line', '2025-04-09 12:46:38', '2025-04-09 12:46:38');

-- ----------------------------
-- Table structure for skills
-- ----------------------------
DROP TABLE IF EXISTS `skills`;
CREATE TABLE `skills`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_id` int NOT NULL,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `level` int NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `category_id`(`category_id` ASC) USING BTREE,
  CONSTRAINT `skills_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `skill_categories` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of skills
-- ----------------------------
INSERT INTO `skills` VALUES (1, 1, 'JavaScript', 90, '2025-04-09 12:46:38', '2025-04-09 12:46:38');
INSERT INTO `skills` VALUES (2, 1, 'React', 85, '2025-04-09 12:46:38', '2025-04-09 12:46:38');
INSERT INTO `skills` VALUES (3, 1, 'HTML/CSS', 95, '2025-04-09 12:46:38', '2025-04-09 12:46:38');
INSERT INTO `skills` VALUES (4, 2, 'Node.js', 80, '2025-04-09 12:46:38', '2025-04-09 12:46:38');
INSERT INTO `skills` VALUES (5, 2, 'Python', 75, '2025-04-09 12:46:38', '2025-04-09 12:46:38');
INSERT INTO `skills` VALUES (6, 2, 'MongoDB', 85, '2025-04-09 12:46:38', '2025-04-09 12:46:38');
INSERT INTO `skills` VALUES (7, 3, 'Docker', 70, '2025-04-09 12:46:38', '2025-04-09 12:46:38');
INSERT INTO `skills` VALUES (8, 3, 'Git', 90, '2025-04-09 12:46:38', '2025-04-09 12:46:38');
INSERT INTO `skills` VALUES (9, 3, 'AWS', 65, '2025-04-09 12:46:38', '2025-04-09 12:46:38');
INSERT INTO `skills` VALUES (10, 1, 'JavaScript', 90, '2025-04-09 12:46:38', '2025-04-09 12:46:38');
INSERT INTO `skills` VALUES (11, 1, 'React', 85, '2025-04-09 12:46:38', '2025-04-09 12:46:38');
INSERT INTO `skills` VALUES (12, 1, 'HTML/CSS', 95, '2025-04-09 12:46:38', '2025-04-09 12:46:38');
INSERT INTO `skills` VALUES (13, 2, 'Node.js', 80, '2025-04-09 12:46:38', '2025-04-09 12:46:38');
INSERT INTO `skills` VALUES (14, 2, 'Python', 75, '2025-04-09 12:46:38', '2025-04-09 12:46:38');
INSERT INTO `skills` VALUES (15, 2, 'MongoDB', 85, '2025-04-09 12:46:38', '2025-04-09 12:46:38');
INSERT INTO `skills` VALUES (16, 3, 'Docker', 70, '2025-04-09 12:46:38', '2025-04-09 12:46:38');
INSERT INTO `skills` VALUES (17, 3, 'Git', 90, '2025-04-09 12:46:38', '2025-04-09 12:46:38');
INSERT INTO `skills` VALUES (18, 3, 'AWS', 65, '2025-04-09 12:46:38', '2025-04-09 12:46:38');

-- ----------------------------
-- Table structure for user_info
-- ----------------------------
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `phone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `location` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `avatar_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `facebook` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `twitter` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `github` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `linkedin` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `youtube` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `zalo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `discord` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_info
-- ----------------------------
INSERT INTO `user_info` VALUES (1, 'Your Name', 'Full Stack Developer', 'A passionate developer with expertise in web development and software engineering.', 'your.email@example.com', '+1234567890', 'Hanoi, Vietnam', 'https://example.com/avatar.jpg', 'https://facebook.com/your-profile', 'https://twitter.com/your-profile', 'https://github.com/your-profile', 'https://linkedin.com/in/your-profile', 'https://youtube.com/your-channel', 'https://zalo.me/your-number12345', 'your-discord-username', '2025-04-09 12:46:38', '2025-04-10 16:01:03');

SET FOREIGN_KEY_CHECKS = 1;
