const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Running backend security checks...\n');

// Function to run commands and handle errors
function runCommand(command) {
  try {
    return execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`❌ Error running command: ${command}`);
    process.exit(1);
  }
}

// Check for vulnerabilities
console.log('📦 Checking for npm vulnerabilities...');
runCommand('npm audit');

// Check for outdated packages
console.log('\n📦 Checking for outdated packages...');
runCommand('npm outdated');

// Check for sensitive data in files
console.log('\n🔐 Checking for sensitive data in files...');
const sensitivePatterns = [
  /password/i,
  /secret/i,
  /key/i,
  /token/i,
  /api[_-]?key/i,
  /aws[_-]?key/i,
  /private[_-]?key/i,
  /database[_-]?url/i,
  /connection[_-]?string/i,
  /mongodb[_-]?uri/i
];

function checkFileForSensitiveData(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  
  lines.forEach((line, index) => {
    sensitivePatterns.forEach(pattern => {
      if (pattern.test(line)) {
        console.warn(`⚠️  Potential sensitive data found in ${filePath}:${index + 1}`);
        console.warn(`   ${line.trim()}`);
      }
    });
  });
}

// Check all JavaScript/TypeScript files
const srcDir = path.join(__dirname, 'src');
function walkDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (/\.(js|jsx|ts|tsx)$/.test(file)) {
      checkFileForSensitiveData(filePath);
    }
  });
}

walkDir(srcDir);

// Check for environment files
console.log('\n🔐 Checking for environment files...');
const envFiles = ['.env', '.env.local', '.env.development', '.env.production'];
envFiles.forEach(envFile => {
  const envPath = path.join(__dirname, envFile);
  if (fs.existsSync(envPath)) {
    console.warn(`⚠️  Found environment file: ${envFile}`);
    console.warn('   Make sure this file is in your .gitignore!');
  }
});

console.log('\n✅ Security checks completed!');
console.log('Please review any warnings above before pushing to GitHub.'); 