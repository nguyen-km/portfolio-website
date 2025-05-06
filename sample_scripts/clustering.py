#%%
from sklearn.datasets import load_iris
from sklearn.cluster import KMeans
import seaborn as sns
from sklearn.decomposition import PCA
import matplotlib.pyplot as plt
import pandas as pd

# %%

X = load_iris().data

#%%
kmeans = KMeans(n_clusters=3)
y_pred = kmeans.fit_predict(X)

# %%
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X)

centroids_pca = pca.transform(kmeans.cluster_centers_)

df_pca = pd.DataFrame(data=X_pca, columns=['Principal Component 1', 'Principal Component 2'])
df_pca['cluster'] = y_pred + 1

# Plot clusters and centroids
sns.scatterplot(data=df_pca, x='Principal Component 1', y='Principal Component 2', hue='cluster', 
                palette='deep',legend='full')
plt.scatter(centroids_pca[:, 0], centroids_pca[:, 1], c='black', marker='o', s=100, label='Centroids')
plt.title("K-Means cluster plot, Iris dataset")
plt.legend(title='Clusters')
# Add watermark/credit
plt.text(
    0.5, 0.95,  # Position (x, y) in axis coordinates
    "Created by Kevin Nguyen",  # Text
    fontsize=10, color='gray', alpha=0.7, ha='center', va='center', transform=plt.gca().transAxes
)
plt.savefig('clustering_plot.png', dpi=300, bbox_inches='tight')
plt.show()
# %%
