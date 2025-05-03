import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-8 space-y-8">
        <section>
            <h1 className="text-3xl font-bold mb-4">Hi, I&apos;m Kevin</h1>
            <p className="text-lg">I&apos;m a data analyst at BBC Research & Consulting. I work at the intersection of analytics, equity, and public policy—developing MCMC models, availability estimation tools, and machine learning pipelines that drive real-world decisions.</p>
        </section>

        <section>
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Modeling & ML */}
            <div>
            <h3 className="text-xl font-bold">Modeling & ML</h3>
            <div className="flex flex-wrap gap-2">
                {['PyMC', 'scikit-learn', 'TensorFlow', 'Keras', 'NumPy', 'pandas'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-gray-100 text-sm text-gray-800 rounded-full">{skill}</span>
                ))}
            </div>
            </div>

            {/* Visualization & Analytics */}
            <div>
            <h3 className="text-xl font-bold">Visualization & Analytics</h3>
            <div className="flex flex-wrap gap-2">
                {['Matplotlib', 'Seaborn', 'Tableau', 'ggplot2', 'Microsoft Excel', 'data visualization'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-gray-100 text-sm text-gray-800 rounded-full">{skill}</span>
                ))}
            </div>
            </div>

            {/* Programming & Tools */}
            <div>
            <h3 className="text-xl font-bold">Programming & Tools</h3>
            <div className="flex flex-wrap gap-2">
                {['Python', 'R', 'SQL', 'PostgreSQL', 'Docker', 'SQLAlchemy'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-gray-100 text-sm text-gray-800 rounded-full">{skill}</span>
                ))}
            </div>
            </div>

        </div>
        </section>



        <section>
            <h2 className="text-2xl font-semibold mb-2">Experience</h2>
            <div className="space-y-4">
            <div>
                <h3 className="text-xl font-bold">BBC Research & Consulting</h3>
                <p className="text-gray-700 text-base flex items-center gap-2">
                    Data Analyst
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full">
                        Current
                    </span>
                    </p>
                <p className="text-gray-600 text-sm">Lead developer of a modular MCMC framework for availability modeling. Designed and deployed analytics infrastructure to support public-sector clients across the U.S.</p>
            </div>
            <div>
                <h3 className="text-xl font-bold">Chipotle Mexican Grill, Inc.</h3>
                <p className="text-gray-700 text-base">Data Engineering Intern</p>
                <p className="text-gray-600 text-sm">Lead developer of a modular MCMC framework for availability modeling. Designed and deployed analytics infrastructure to support public-sector clients across the U.S.</p>
            </div>
            <div>
                <h3 className="text-xl font-bold">White House Council of Economic Advisers</h3>
                <p className="text-gray-700 text-base">Finance & Banking Intern</p>
                <p className="text-gray-600 text-sm">Lead developer of a modular MCMC framework for availability modeling. Designed and deployed analytics infrastructure to support public-sector clients across the U.S.</p>
            </div>
            </div>
        </section>
        <section>
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <div className="space-y-2">
            <div>
            <h3 className="text-lg font-bold">University of Colorado Boulder</h3>
            <p className="text-gray-700 text-base">M.S. in Applied Mathematics, Emphasis in Statistics and Data Science – 2023</p>
            <p className="text-gray-700 text-base">B.A. in Quantiative Economics and Political Science – 2020</p>
            </div>
        </div>
        </section>

        </main>
      <Footer />
    </>
  )
}