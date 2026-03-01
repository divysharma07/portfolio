
export default function Projects() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <ul className="text-gray-400 space-y-4">
        <li>
          <strong>Linux Server Setup Lab</strong> – Configured and secured RHEL server with LVM, users, and firewall rules.
        </li>
        <li>
          <strong>LVM Expansion Project</strong> – Extended logical volumes without downtime.
        </li>
        <li>
          <strong>Apache Deployment</strong> – Deployed and configured Apache web server.
        </li>
        <li>
          <strong>AWS EC2 Deployment Lab</strong> – Launched EC2 instance and configured secure access.
        </li>
      </ul>
    </section>
  );
}
